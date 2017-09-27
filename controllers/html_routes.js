/****************************************************************************
 ****************************************************************************

    Initialize

*****************************************************************************
*****************************************************************************/
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();

// Talk to the models
const models = require(path.join(__dirname, "..", "models"));
const Writer = models.Writer;
const Story  = models.Story;
const Photo  = models.Photo;
const Reader = models.Reader;



/****************************************************************************
 ****************************************************************************

    Set up routes

*****************************************************************************
*****************************************************************************/
router.get("/", (req, res) => {
    res.render("index", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["index"]
    });
});


router.get("/upload-photos", (req, res) => {
    res.render("upload-photos", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["dropzone/dropzone", "style"],
        "custom-javascript": ["dropzone/dropzone", "upload-photos"]
    });
});


router.get("/compose", (req, res) => {
    res.render("compose", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["compose"]
    });
});


router.get("/edit-:id", (req, res) => {
    res.render("edit", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["edit"]
    });
});


router.get("/story-:id", (req, res) => {
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
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["story"],
        photos
    });
});


router.get("/writers", (req, res) => {
    const writers = [];

    for (let i = 0; i < 6; i++) {
        writers.push({
            // TODO: Replace ID (i + 1) with UUID
            "id"         : (i + 1),
            "fullname"   : "John Absheu",
            "profile_url": "http://www.math.uni-frankfurt.de/~person/_4170854.jpg"
        });
    }

    res.render("writers", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["writers"],
        writers
    });
});


router.get("/profile-:id", (req, res) => {
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
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["profile"],
        writer
    });
});


router.get("/settings", (req, res) => {
    const writer = {
        "id"      : "1",
        "fullname": "David Gutierrez",
        "email"   : "d.gutierrez@example.com",
        "username": "d.gutierrez"
    };

    res.render("settings", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["settings"],
        writer
    });
});


router.get("/meet-mai", (req, res) => {
    res.render("meet-mai", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["meet-mai"]
    });
});


router.get("/meet-mai-team", (req, res) => {
    res.render("meet-mai-team", {
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["meet-mai-team"]
    });
});


module.exports = router;