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
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        function callback(results) {
            console.log(results[0].dataValues);
            
            const writer = {
                "fullname"     : results[0].dataValues.fullname,
                "profile_url"  : results[0].dataValues.profile_url,
                "numNewStories": 1,
                "numStories"   : 3,
                "numWriters"   : 6,
                "numReaders"   : 4,
                "stories"      : results[0].dataValues.Stories
            };

//            console.log(writer);
/*
            res.render("profile", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["index"],
                writer
            });
*/
        }

        Writer.findAll({
            "where"     : {"id": req.cookies["mai-id"]},
            "attributes": ["fullname", "profile_url"],
            "include"   : [Story, Photo]

        }).then(callback);
    }
});


router.get("/upload-photos", (req, res) => {
    res.render("upload-photos", {
        "mai-id"           : req.cookies["mai-id"],
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["dropzone/dropzone", "style"],
        "custom-javascript": ["dropzone/dropzone", "upload-photos"]
    });
});


router.get("/compose", (req, res) => {
    res.render("compose", {
        "mai-id"           : req.cookies["mai-id"],
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["compose"]
    });
});


router.get("/edit-:id", (req, res) => {
    res.render("edit", {
        "mai-id"           : req.cookies["mai-id"],
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
        "mai-id"           : req.cookies["mai-id"],
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["story"],
        photos
    });
});


router.get("/writers", (req, res) => {
    function callback(results) {
        const writers = [];

        for (let i = 0; i < results.length; i++) {
            writers.push({
                "id"         : results[i].id,
                "fullname"   : results[i].dataValues.fullname,
                "profile_url": results[i].dataValues.profile_url
            });
        }

        res.render("writers", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["writers"],
            writers
        });
    }

    Writer.findAll({}).then(callback);
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
        "mai-id"           : req.cookies["mai-id"],
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
        "mai-id"           : req.cookies["mai-id"],
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["settings"],
        writer
    });
});


router.get("/meet-mai", (req, res) => {
    res.render("meet-mai", {
        "mai-id"           : req.cookies["mai-id"],
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["meet-mai"]
    });
});


router.get("/meet-mai-team", (req, res) => {
    res.render("meet-mai-team", {
        "mai-id"           : req.cookies["mai-id"],
        "mai-fullname"     : req.cookies["mai-fullname"],
        "custom-css"       : ["style"],
        "custom-javascript": ["meet-mai-team"]
    });
});


module.exports = router;
