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


router.get("/story/:id", (req, res) => {
    // TODO: Get the user's story

    res.render("story", {
        "custom-css"       : ["style"],
        "custom-javascript": ["story"]
    });
});


router.get("/writers", (req, res) => {
    // TODO: Get all writers

    res.render("writers", {
        "custom-css"       : ["style"],
        "custom-javascript": ["writers"]
    });
});


router.get("/profile/:id", (req, res) => {
    // TODO: Get the user's profile

    res.render("profile", {
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