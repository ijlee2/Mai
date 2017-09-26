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
    function callback(results) {
        res.redirect("/");
    }

    // Find the user's hash
    Writer.findAll({
        "attributes": ["hash"],
        "where"     : {"username": req.body.username}

    }).then(results => {
        // Compare hashes to verify the user
        bcrypt.compare(req.body.password, results[0].hash, (error, isMatch) => {
            console.log((isMatch) ? "Welcome" : "Please check your username and password.");

        });

    }).then(callback);
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

    return res.status(200).send(req.file);
});


router.post("/add-story", (req, res) => {
    // TODO: Use req.body (and its objects) to create a story. For now,
    // (1) Store the photo url and caption in Photo table.
    // (2) Redirect to index.html if the query was a success.
    
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