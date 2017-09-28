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
    // Display the home page if the user is not logged in
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    // Display their profile page if logged in
    } else {
        function callback(results) {
            const stories = [];

            for (let i = 0; i < results[0].Stories.length; i++) {
                stories.push({
                    "id"   : results[0].Stories[i].id,
                    "title": results[0].Stories[i].title,
                    "url"  : results[0].Stories[i].Photos[0].dataValues.url
                });
            }

            // TODO: Calculate the number of stories, writers, and readers based on queries
            const writer = {
                "fullname"     : results[0].dataValues.fullname,
                "profile_url"  : results[0].dataValues.profile_url,
                "numNewStories": Math.floor(3 * Math.random()) + 1,
                "numStories"   : 6,
                "numWriters"   : Math.floor(100 * Math.random()) + 1,
                "numReaders"   : Math.floor(100 * Math.random()) + 1,
                stories
            };

            res.render("profile", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["index"],
                "editable"         : true,
                writer,
            });
        }

        // Do a nested join
        Writer.findAll({
            "where"     : {"id": req.cookies["mai-id"]},
            "attributes": ["fullname", "profile_url"],
            "include"   : [
                {
                    "model"  : Story,
                    "include": [
                        {
                            "model"     : Photo,
                            "attributes": ["url"]
                        }
                    ]
                }
            ]

        }).then(callback);
    }
});


router.get("/logout", function(req, res){
    const cookie = req.cookies;

    for (let prop in cookie) {
        if (cookie.hasOwnProperty(prop)) {
            res.cookie(prop, "", {"expires": new Date(0)});
        }
    }
    
    res.redirect("/");
});


router.get("/profile_:id", (req, res) => {
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        function callback(results) {
            const stories = [];

            for (let i = 0; i < results[0].Stories.length; i++) {
                stories.push({
                    "id"   : results[0].Stories[i].id,
                    "title": results[0].Stories[i].title,
                    "url"  : results[0].Stories[i].Photos[0].dataValues.url
                });
            }

            const writer = {
                "fullname"     : results[0].dataValues.fullname,
                "profile_url"  : results[0].dataValues.profile_url,
                "numNewStories": Math.floor(3 * Math.random()) + 1,
                "numStories"   : 6,
                "numWriters"   : Math.floor(100 * Math.random()) + 1,
                "numReaders"   : Math.floor(100 * Math.random()) + 1,
                stories
            };

            res.render("profile", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["index"],
                "editable"         : (req.params.id === req.cookies["mai-id"]),
                writer
            });
        }

        Writer.findAll({
            "where"     : {"id": req.params.id},
            "attributes": ["fullname", "profile_url"],
            "include"   : [
                {
                    "model"  : Story,
                    "include": [
                        {
                            "model"     : Photo,
                            "attributes": ["url"]
                        }
                    ]
                }
            ]

        }).then(callback);

    }
});


router.get("/upload-photos", (req, res) => {
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        // Must include dropzone before calling upload-photos.js
        res.render("upload-photos", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["dropzone/dropzone", "style"],
            "custom-javascript": ["dropzone/dropzone", "upload-photos"]
        });

    }
});


router.get("/create-story", (req, res) => {
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        // TODO: Replace this array of photo URLs with the URLs from Amazon S3
        const photos = [
            {"url": "https://goo.gl/9p2qT2"},
            {"url": "https://goo.gl/uKWPCJ"},
            {"url": "https://goo.gl/tAeWUE"}
        ];

        res.render("compose", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["compose"],
            photos

        });

    }
});


router.get("/story_:id", (req, res) => {
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        function callback(results) {
            const writer = {
                "id"      : results[0].Writer.dataValues.id,
                "fullname": results[0].Writer.dataValues.fullname
            };

            const photos = [];

            for (let i = 0; i < results[0].Photos.length; i++) {
                photos.push({
                    "url"    : results[0].Photos[i].url,
                    "caption": results[0].Photos[i].caption
                });
            }

            res.render("story", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["story"],
                "title"            : results[0].dataValues.title,
                writer,
                photos
            });
        }

        Story.findAll({
            "where"  : {"id": req.params.id},
            "include": [
                {
                    "model"     : Writer,
                    "attributes": ["id", "fullname"]
                },
                {
                    "model"     : Photo,
                    "attributes": ["url", "caption"]
                }
            ]

        }).then(callback);

    }
});


router.get("/edit-story_:maiId&:storyId", (req, res) => {
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    // Only the user can edit their stories
    } else if (req.cookies["mai-id"] !== req.params.maiId) {
        res.redirect("/");

    } else {
        function callback(results) {
            const photos = [];

            for (let i = 0; i < results[0].Photos.length; i++) {
                photos.push({
                    "id"     : results[0].Photos[i].id,
                    "url"    : results[0].Photos[i].url,
                    "caption": results[0].Photos[i].caption
                });
            }

            const story = {
                "id"   : results[0].dataValues.id,
                "title": results[0].dataValues.title,
                photos
            };

            res.render("edit", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["edit"],
                story
            });
        }

        Story.findAll({
            "where"  : {"id": req.params.storyId},
            "include": [Photo]

        }).then(callback);
    }
});


router.get("/writers", (req, res) => {
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
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
    }
});


router.get("/settings", (req, res) => {
    // Check that the user is logged in
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        function callback(results) {
            const writer = {
                "id"      : results[0].dataValues.id,
                "fullname": results[0].dataValues.fullname,
                "email"   : results[0].dataValues.email,
                "username": results[0].dataValues.username
            };

            res.render("settings", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["settings"],
                writer
            });
        }

        Writer.findAll({
            "where": {"id": req.cookies["mai-id"]}

        }).then(callback);
    }
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