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
const saltRounds = 15;

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



/****************************************************************************
 ****************************************************************************

    Set up routes (related to accounts)

*****************************************************************************
*****************************************************************************/
router.post("/signup", (req, res) => {
    function callback(results) {
        console.log(results);

        res.redirect("/");
    }

    // Salt and hash the user's password
    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        Writer.create({
            "fullname": req.body.fullname,
            "email"   : req.body.email,
            "username": req.body.username,
            "hash"    : hash

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
                        "maxAge"  : 604800,
                        "httpOnly": true
//                        "secure"  : true
                    };

                    // TODO: Add secure flag for product
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
    function callback(results) {
        res.redirect("/profile");
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
    function callback(results) {
        res.redirect("/profile");
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
        // TODO: Reset cookie

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
    }

    const dimensions = sizeOf(req.file.path);

    if ((dimensions.width < 200) || (dimensions.height < 200)) {
        return res.status(422).json({
            "error": "The image must be at least 200 x 200px."
        });
    }

//    return res.status(200).send(req.file);
    res.redirect("/edit");
});


router.post("/publish", (req, res) => {
    function callback(results) {
        // TODO: Redirect to story.hbs with the correct id

    }

    const photos = [];

    for (let i = 0; i < req.body.urls.length; i++) {
        photos.push({
            "url"    : req.body.urls[i],
            "caption": req.body.captions[i]
        });
    }

    Photo.bulkCreate(photos).then(() => {
        Story.create({
            "title": req.body.title

        }).then(callback);
    });

    // TODO later: If storing was successful, call Google Vision next
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


/* Optional
router.patch("/edit-story/:id", (req, res) => {
    function callback(results) {
        // TODO: Redirect to profile.hbs with the correct id
    }

    // TODO: Edit the story with the id

});
*/


router.delete("/delete-story/:id", (req, res) => {
    function callback(results) {
        // TODO: Redirect to profile.hbs with the correct id
        res.redirect("/profile.hbs");
    }

    Story.destroy({
        "where": {"id": req.params.id}

    }).then(callback);
});


module.exports = router;