// Import packages
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();

// Talk to the models
const models = require(path.join(__dirname, "..", "models"));
const User   = models.User;
const Story  = models.Story;
const Photo  = models.Photo;

// Authenticate to Google Cloud
const vision = require("node-cloud-vision-api-comoc");
vision.init({"auth": "AIzaSyDac5vMeEApkYZaE09R4bFhAWxjJtwyQoU"});



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
router.post("/signup", (req, res) => {
    res.sendFile("index.html");
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