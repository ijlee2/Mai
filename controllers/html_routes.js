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

router.get("/user", (req, res) => {
    res.render("user", {
        "custom-css"       : ["style"],
        "custom-javascript": ["user"]
    });
});

router.get("/story", (req, res) => {
    res.render("story", {
        "custom-css"       : ["style"],
        "custom-javascript": ["story"]
    });
});

router.get("/settings", (req, res) => {
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

router.get("/upload", (req, res, next) => {
    res.render("upload", {
        "custom-css"       : ["style"],
        "custom-javascript": ["upload", "dropzone/dropzone"]
    });
});

module.exports = router;