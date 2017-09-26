// Import packages
const express = require("express");
const path    = require("path");
const bcrypt  = require("bcrypt");



// Import packages for Dropzone
const multer = require("multer");
const upload = multer({"dest": "uploads"});
const sizeOf = require("image-size");



// Create an instance of Router
const router = express.Router();

// Set bcrypt settings
const saltRounds = 10;

// Talk to the models
const models = require(path.join(__dirname, "..", "models"));
const Writer = models.Writer;
const Story  = models.Story;
const Photo  = models.Photo;
const Reader = models.Reader;

// Authenticate to Google Cloud
const vision = require("node-cloud-vision-api-comoc");
vision.init({"auth": "AIzaSyDac5vMeEApkYZaE09R4bFhAWxjJtwyQoU"});



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
router.post("/signup", (req, res) => {
    function callback(results) {
        console.log(results);
        
        res.redirect("/");
    }

    // Hash the user's password
    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        Writer.create({
            "fullname": req.body.fullname,
            "email"   : req.body.email,
            "username": req.body.username,
            "hash"    : hash

        }).then(callback);
    });
});

router.post("/login", (req, res) => {
    function callback(results) {
        res.redirect("/");
    }

    // Find the user's hash
    Writer.findAll({
        "attributes": ["hash"],
        "where"     : {"username": req.body.username}

    }).then(results => {
        // Compare hashes to authenticate the user
        bcrypt.compare(req.body.password, results[0].hash, (error, isMatch) => {
            console.log((isMatch) ? "Welcome" : "Please check your username and password.");

        });

    }).then(callback);
});

router.post("/upload-photos", upload.single("file"), (req, res, next) => {
    if (!req.file.mimetype.startsWith("image/")) {
        return res.status(422).json({
            "error": "The uploaded file must be an image."
        });
    }

    const dimensions = sizeOf(req.file.path);

    if ((dimensions.width < 200) || (dimensions.height < 200)) {
        return res.status(422).json({
            "error": "The image must be at least 200 x 200px."
        });
    }

    return res.status(200).send(req.file);
});

router.get("/vision", (req, res) => {
    // Source: https://github.com/comoc/node-cloud-vision-api
    const request = new vision.Request({
        "image": new vision.Image({
            "url": "http://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/public/field/field_image_main/friends_main.jpg?itok=Wmh9VQWO"
        }),

        "features": [
            new vision.Feature("FACE_DETECTION", 1)
        ]
    });

    vision.annotate(request).then(results => {
        res.send(results.responses);

    }, error => {
        console.log("error: " + error);

    });
});

// PUT route for updating account info (John: This put request worked, but I have not figured out how to connect the request to "this" user.)
router.put("/update-profile", function(req, res) {
    Writer.update({
        "fullname": req.body.fullname,
        "email"   : req.body.email,
        "username": req.body.username
    }, {
        where: {
          "id" : Writer.id
        }
      })
    .then(function(updatedWriter) {
      res.json(updatedWriter);
    })
  });

// PUT route to update password (John: this works, but I haven't figured out how to include in the request the username of the current user. We need that in the parameters for the request to work.)
router.put("/update-password/:username", function(req, res) {
    bcrypt.hash(req.body.password_new, saltRounds, (error, hash) => {
        Writer.update({
            "hash": hash
        }, {
        where: {
          "username" : req.params.username
        }
        }).then(function(){
            console.log("password and hash updated")    
        });
    });
});


// DELETE route for deleting account (John: This works, but it is not restricted to only the current user deleting their own account.)
router.delete("/delete-account/:username", function(req, res) {
    Writer.destroy({
      where: {
        "username" : req.params.username
      }
    }).then(function() {
      res.redirect("/");
      console.log("Writer account deleted");
    });
});

module.exports = router;