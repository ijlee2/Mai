// http://google.github.io/google-api-nodejs-client/22.1.0/vision.html

// Import packages
const express = require("express");
//const google  = require("googleapis");
const path    = require("path");

const vision  = require("node-cloud-vision-api-comoc");
vision.init({"auth": "AIzaSyAdisiH71lCbJafp0pRK-75-UjsMz5bMXA"});

// Create an instance of Router
const router = express.Router();

// Talk to the model
//const Burger = require(path.join(__dirname, "..", "models")).Burger;

// Convert JS Date to MySQL Timestamp
// Source: https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
function getDate() {
    // Get current time
    let time = new Date();

    // Convert to local time
    time -= time.getTimezoneOffset() * 60000;

    // Change the format to Timestamp
    return new Date(time).toISOString().slice(0, 19).replace("T", " ");
}



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
router.get("/", (req, res) => {
    res.sendFile("index.html");
});

router.get("/vision", (req, res) => {
    const request = new vision.Request({
        "image"   : new vision.Image({
            "url": "https://scontent-nrt1-1.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12353236_1220803437936662_68557852_n.jpg"
        }),

        "features": [
            new vision.Feature("FACE_DETECTION", 1)
        ]
    });

    vision.annotate(request).then(results => {
        console.log(JSON.stringify(results.responses));

    }, error => {
        console.log("error: " + error);

    });
});


module.exports = router;