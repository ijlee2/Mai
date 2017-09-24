// http://google.github.io/google-api-nodejs-client/22.1.0/vision.html

// Import packages
const express = require("express");
const google  = require("googleapis");
const vision  = google.vision("v1");
const path    = require("path");

const API_KEY = "AIzaSyAOUOWY4CD2V3DL-5Fl5UHTZAhw_9b1tgs";

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
    const request = {
        "resource": {
            "image": {
                "source": {"imageUri": "https://goo.gl/8UNYmG"}
            },
            "features": [
                {
                    "type"      : "FACE_DETECTION",
                    "maxResults": 1
                }
            ]
        },

        "key": API_KEY
    }

    vision.images.annotate(request, function (error, results) {
        if (error) throw error;

        console.log(JSON.stringify(results, null, 2));

    });
});


module.exports = router;