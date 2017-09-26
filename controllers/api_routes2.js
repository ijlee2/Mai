// Import packages
const express = require("express");
const path    = require("path");

// Import packages for Dropzone
const multer = require("multer");
const upload = multer({"dest": "uploads"});
const sizeOf = require("image-size");

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
router.post("/add-story", (req, res) => {
    // TODO: Use req.body (and its objects) to create a story. For now,
    // (1) Store the photo url and caption in Photo table.
    // (2) Redirect to index.html if the query was a success.
    
});

module.exports = router;