/****************************************************************************
 ****************************************************************************

    Initialize

*****************************************************************************
*****************************************************************************/
// Import packages
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();

// Import bcrypt
const bcrypt     = require("bcrypt");
const saltRounds = 12;

// Import Dropzone
const multer = require("multer");
const upload = multer({"dest": "uploads"});
const sizeOf = require("image-size");

// Import Google Cloud Vision
const vision = require("node-cloud-vision-api-comoc");
vision.init({"auth": "AIzaSyDac5vMeEApkYZaE09R4bFhAWxjJtwyQoU"});

// Talk to the models
const models = require(path.join(__dirname, "..", "models"));
const Writer = models.Writer;
const Story  = models.Story;
const Photo  = models.Photo;
const Reader = models.Reader;

// Default profile photos
const default_profiles = [
    "https://goo.gl/7g6AwU",
    "https://goo.gl/dFcx11",
    "https://goo.gl/myorst",
    "https://goo.gl/cnQGa7"
];



/****************************************************************************
 ****************************************************************************

    Set up routes (related to accounts)

*****************************************************************************
*****************************************************************************/
router.post("/signup", (req, res) => {
    function callback(result) {
        const options = {
            "expires" : new Date(Date.now() + 604800000),
            "httpOnly": true
//            "secure"  : true
        };
     
        res.cookie("mai-id", result.id, options);
        res.cookie("mai-fullname", result.fullname, options);
        res.redirect("/");
    }

    // Salt and hash the user's password
    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        Writer.create({
            "fullname"   : req.body.fullname,
            "email"      : req.body.email,
            "username"   : req.body.username,
            "hash"       : hash,
            "profile_url": default_profiles[Math.floor(default_profiles.length * Math.random())]

        }).then(callback);
    });
});


router.post("/login", (req, res) => {
    // Find the user's hash
    Writer.findAll({
        "attributes": ["id", "fullname", "hash"],
        "where"     : {"username": req.body.username}

    }).then(results => {
        // Compare hashes to verify the user
        bcrypt.compare(req.body.password, results[0].hash, (error, isMatch) => {
            if (isMatch) {
                if (!req.cookies.cookieName) {
                    const options = {
                        "expires" : new Date(Date.now() + 604800000),
                        "httpOnly": true
//                        "secure"  : true
                    };

                    // Create cookies (expire in a week)
                    res.cookie("mai-id", results[0].id, options);
                    res.cookie("mai-fullname", results[0].fullname, options);
                }
            }

            res.redirect("/");

        });

    });
});


router.patch("/update-profile/:id", (req, res) => {
    function callback(result) {

        // TODO: Update cookie for fullname
        res.cookie("mai-fullname", req.body.fullname);

        // TODO: Pass values
        res.redirect("/settings");
    }

    Writer.update({
        "fullname": req.body.fullname,
        "email"   : req.body.email,
        "username": req.body.username

    }, {
        "where": {"id" : req.params.id}

    }).then(callback);
});


router.patch("/update-password/:id", (req, res) => {
    function callback(result) {
        // TODO: Pass values
        res.redirect("/settings");
    }

    // Find the user's hash
    Writer.findAll({
        "attributes": ["hash"],
        "where"     : {"id": req.params.id}

    }).then(results => {
        // Verify the user
        bcrypt.compare(req.body.password_current, results[0].hash, (error, isMatch) => {
            if (isMatch) {
                // Salt and hash the new password
                bcrypt.hash(req.body.password_new, saltRounds, (error, hash) => {
                    Writer.update({hash}, {"where": {"id": req.params.id}});

                });
            }
        });

    }).then(callback);
});


router.delete("/delete-account/:id", (req, res) => {
    function callback(results) {
        res.clearCookie("mai-id");
        res.clearCookie("mai-fullname");
        res.redirect("/");
    }

    Writer.destroy({
        "where": {"id": req.params.id}

    }).then(callback);
});



/****************************************************************************
 ****************************************************************************

    Set up routes (related to stories)

*****************************************************************************
*****************************************************************************/
router.post("/upload-photos", upload.single("file"), (req, res, next) => {
    if (!req.file.mimetype.startsWith("image/")) {
        return res.status(422).json({
            "error": "The uploaded file must be an image."
        });
    };

    const dimensions = sizeOf(req.file.path);

    if ((dimensions.width < 200) || (dimensions.height < 200)) {
        return res.status(422).json({
            "error": "The image must be at least 200 x 200px."
        });
    };

//    return res.status(200).send(req.file);
    // TODO: send user to "add-story" page along with photo URLs
    res.redirect("/add-story");
    // next();
});


router.post("/add-story", (req, res) => {
    function callback(results) {
        // TODO later: If storing was successful, call Google Vision next
        
        // Redirect to story page
        res.redirect("/story-${results[0].dataValues.story_id}");
    }

    Story.create({
        "title"    : req.body.title,
        "writer_id": req.cookies["mai-id"]

    }).then(result => {
        const photos = [];

        console.log(result);

        for (let i = 0; i < req.body.urls.length; i++) {
            photos.push({
                "url"     : req.body.urls[i],
                "caption" : req.body.captions[i],
                "story_id": result.dataValues.id
            });
        }

        Photo.bulkCreate(photos).then(callback);
    });
});


router.patch("/edit-story-:id", (req, res) => {
    function callback(results) {
        console.log("success?");

        // TODO: Redirect to story.hbs with the correct id
 //       res.redirect("/story.hbs");
    }

    // Update the title
    Story.update({
        "title": req.body.title

    }, {
        "where": {"id": req.params.id}

    // Update the captions (TODO: test and fix this)
    }).then(result => {
        function updateCaption(caption, i) {
            return Photo.update({
                "caption": caption

            }, {
                "where": {"id": req.body.ids[i]}

            });
        }

        const updatesInParallel = req.body.captions.map(updateCaption);

        return Promise.all([updatesInParallel]);

    }).then(callback);
});


router.delete("/delete-story-:id", (req, res) => {
    function callback(results) {
        res.redirect("/");
    }

    Story.destroy({
        "where": {"id": req.params.id}

    }).then(callback);
});


router.get("/vision", (req, res) => {
    // Source: https://github.com/comoc/node-cloud-vision-api
    const request = new vision.Request({
        "image": new vision.Image({
            "url": "http://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/public/field/field_image_main/friends_main.jpg?itok=Wmh9VQWO"
        }),

        "features": [
            new vision.Feature("FACE_DETECTION", 1)
        ]
    });

    vision.annotate(request).then(results => {
        res.send(results.responses);

    }, error => {
        console.log("error: " + error);

    });
});


module.exports = router;