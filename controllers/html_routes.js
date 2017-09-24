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
        "code-javascript": "assets/javascript/index.js"
    });
});

router.get("/meet-mai", (req, res) => {
    res.render("meet-mai", {
        "code-javascript": "assets/javascript/meet-mai.js"
    });
});

router.get("/meet-mai-team", (req, res) => {
    res.render("meet-mai-team", {
        "code-javascript": "assets/javascript/meet-mai-team.js"
    });
});

module.exports = router;