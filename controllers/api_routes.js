// Import packages
const express = require("express");
const path    = require("path");
const bcrypt  = require("bcrypt");

// Create an instance of Router
const router = express.Router();

// Set bcrypt settings
const saltRounds = 10;

// Talk to the models
const models = require(path.join(__dirname, "..", "models"));
const Writer = models.Writer;
const Story  = models.Story;
const Photo  = models.Photo;
const Reader = models.Reader;

// Authenticate to Google Cloud
const vision = require("node-cloud-vision-api-comoc");
vision.init({"auth": "AIzaSyDac5vMeEApkYZaE09R4bFhAWxjJtwyQoU"});



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
router.post("/signup", (req, res) => {
    function callback(results) {
        console.log(results);
        
        res.redirect("/");
    }

    // Hash the user's password
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
        // Compare hashes to authenticate the user
        bcrypt.compare(req.body.password, results[0].hash, (error, isMatch) => {
            console.log((isMatch) ? "Welcome" : "Please check your username and password.");

        });

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

router.get("/dropzone", (req, res) => {
    res.sendFile("dropzone.html");
});

module.exports = router;