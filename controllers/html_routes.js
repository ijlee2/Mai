/****************************************************************************
 ****************************************************************************
    
    Initialize
    
*****************************************************************************
*****************************************************************************/
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
router.get("/", (req, res) => {
    res.render("index", {
        "custom-css"       : ["style"],
        "custom-javascript": ["index"]
    });
});


router.get("/compose", (req, res) => {
    res.render("compose", {
        "custom-css"       : ["dropzone/dropzone", "style"],
        "custom-javascript": ["dropzone/dropzone", "compose"]
    });
});


router.get("/story/:id?", (req, res) => {
    const photos = [
        {
            "url"    : "https://i.pinimg.com/736x/b3/48/4c/b3484c816ba990b5ff29e5cd2299497f--wise-words-wise-sayings.jpg",
            "caption": "Your best teacher is your last mistake."
        },
        {
            "url": "https://i.pinimg.com/736x/b6/d4/8b/b6d48b00d132a940e17dc57ae959a748--being-comfortable-quotes-inspirational-hiking-quotes.jpg",
            "caption": "Words to live and change your life by..."
        },
        {
            "url": "https://i.pinimg.com/736x/de/f3/51/def35127fc73da5d7ab7d2f1f6fd0da0--quotes-about-changing-yourself-quote-about-being-yourself.jpg",
            "caption": "Trying to change my perspective on things.."
        }
    ];

    res.render("story", {
        photos,
        "custom-css"       : ["style"],
        "custom-javascript": ["story"]
    });
});


router.get("/writers", (req, res) => {
    const writers = [];

    for (let i = 0; i < 6; i++) {
        writers.push({
            "fullname"   : "John Absheu",
            "profile_url": "http://www.math.uni-frankfurt.de/~person/_4170854.jpg"
        });
    }

    res.render("writers", {
        writers,
        "custom-css"       : ["style"],
        "custom-javascript": ["writers"]
    });
});


router.get("/profile/:id?", (req, res) => {
    const stories = [
        {
            "id": "1",
            "url": "https://i.pinimg.com/736x/b3/48/4c/b3484c816ba990b5ff29e5cd2299497f--wise-words-wise-sayings.jpg"
        },
        {
            "id": "2",
            "url": "http://www.mistymountaincampresort.com/images/at_4.jpg"
        },
        {
            "id": "3",
            "url": "http://www.texasmonthly.com/wp-content/uploads/2015/03/Wilhites-Road-Trip.jpg"
        },
    ];

    const writer = {
        "fullname"     : "Isaac Lee",
        "profile_url"  : "assets/images/user_photo.jpg",
        "numNewStories": 1,
        "numStories"   : 3,
        "numWriters"   : 6,
        "numReaders"   : 4,
        stories
    };

    res.render("profile", {
        writer,
        "custom-css"       : ["style"],
        "custom-javascript": ["profile"]
    });
});


router.get("/settings", (req, res) => {
    // TODO: Display current values in settings

    res.render("settings", {
        "custom-css"       : ["style"],
        "custom-javascript": ["settings"]
    });
});


router.get("/meet-mai", (req, res) => {
    res.render("meet-mai", {
        "custom-css"       : ["style"],
        "custom-javascript": ["meet-mai"]
    });
});


router.get("/meet-mai-team", (req, res) => {
    res.render("meet-mai-team", {
        "custom-css"       : ["style"],
        "custom-javascript": ["meet-mai-team"]
    });
});


module.exports = router;