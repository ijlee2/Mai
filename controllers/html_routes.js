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
                writer
            });
        }

        Writer.findAll({
            "where"     : {"id": req.cookies["mai-id"]},
            "attributes": ["fullname", "profile_url"],
            "include"   : [{"model": Story, "include": [Photo]}]

        }).then(callback);
    }
});


router.get("/upload-photos", (req, res) => {
    // Check that the user is logged in
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        res.render("upload-photos", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["dropzone/dropzone", "style"],
            "custom-javascript": ["dropzone/dropzone", "upload-photos"]
        });

    }
});


router.get("/compose", (req, res) => {
    // Check that the user is logged in
    if (!req.cookies["mai-id"]) {
        res.render("index", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["index"]
        });

    } else {
        res.render("compose", {
            "mai-id"           : req.cookies["mai-id"],
            "mai-fullname"     : req.cookies["mai-fullname"],
            "custom-css"       : ["style"],
            "custom-javascript": ["compose"]
        });

    }
});


router.get("/edit-:id", (req, res) => {
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
            const photos = [];

            for (let i = 0; i < results[0].Photos.length; i++) {
                photos.push({
                    "id"     : results[0].Photos[i].id,
                    "caption": results[0].Photos[i].caption,
                    "url"    : results[0].Photos[i].url
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
            "where"  : {"id": req.params.id},
            "include": [Photo]

        }).then(callback);
    }

});


router.get("/story-:id", (req, res) => {
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
            const photos = [];

            res.render("story", {
                "mai-id"           : req.cookies["mai-id"],
                "mai-fullname"     : req.cookies["mai-fullname"],
                "custom-css"       : ["style"],
                "custom-javascript": ["story"],
                "title"            : results[0].dataValues.title,
                photos
            });

            for (let i = 0; i < results[0].Photos.length; i++) {
                photos.push({
                    "url"    : results[0].Photos[i].url,
                    "caption": results[0].Photos[i].caption
                });
            }
        }

        Story.findAll({
            "where"  : {"id": req.params.id},
            "include": [Photo]

        }).then(callback);

    }
});


router.get("/writers", (req, res) => {
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


router.get("/profile-:id", (req, res) => {
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
                writer
            });
        }

        Writer.findAll({
            "where"     : {"id": req.params.id},
            "attributes": ["fullname", "profile_url"],
            "include"   : [{"model": Story, "include": [Photo]}]

        }).then(callback);

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
