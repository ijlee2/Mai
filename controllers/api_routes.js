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

// Import bcrypt
const bcrypt     = require("bcrypt");
const saltRounds = 15;

// Import Dropzone
const multer = require("multer");
const upload = multer({"dest": "uploads"});
const sizeOf = require("image-size");

// Import Google Cloud Vision
const vision = require("node-cloud-vision-api-comoc");
vision.init({"auth": "AIzaSyDac5vMeEApkYZaE09R4bFhAWxjJtwyQoU"});

// Talk to the models
const models = require(path.join(__dirname, "..", "models"));
const Writer = models.Writer;
const Story  = models.Story;
const Photo  = models.Photo;
const Reader = models.Reader;

// Create captions ourselves for now (replace this with NLG later)
const captions = [
    "Your best teacher is your last mistake.",
    "Words to live and change your life by...",
    "Trying to change my perspective on things..",
    "Taking one step at a time and excited to see where I end up!",
    "I'm not quite this good but can't wait until I am!",
    "It's about to get very quiet at this table.",
    "This is the best day ever!",
    "Feeling high on this sunrise. Very blessed.",
    "Electric nighttime algae in Australia. Loving it.",
    "Morning coffee and stroll through NYC. Doing it right!",
    "Venice. Right in the thick of it!",
    "Lazy Sunday float. Get it.",
    "Morning canoe trip. Worth waking up for!",
    "We all start as strangers.",
    "Grandma and Grampa hanging out with the boys :)",
    "Feeling humble and blessed today. Best day of my life.",
    "She said yes!!!!",
    "Merry Christmas!",
    "We all start as strangers. $friendsgiving",
    "Gametime!",
    "Wish you were here.",
    "Just do it!"
];

const numCaptions = captions.length;


/****************************************************************************
 ****************************************************************************

    Set up routes (related to accounts)

*****************************************************************************
*****************************************************************************/
router.post("/signup", (req, res) => {
    function callback(results) {
        console.log(results);

        res.redirect("/");
    }

    // Salt and hash the user's password
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
        // Compare hashes to verify the user
        bcrypt.compare(req.body.password, results[0].hash, (error, isMatch) => {
            console.log((isMatch) ? "Welcome" : "Please check your username and password.");

        });

    }).then(callback);
});


router.patch("/update-profile/:id", (req, res) => {
    function callback(results) {
        res.redirect("/profile");
    }

    Writer.update({
        "fullname": req.body.fullname,
        "email"   : req.body.email,
        "username": req.body.username

    }, {
        "where": {"id" : req.params.id}

    }).then(callback);
});


router.patch("/update-password/:id", (req, res) => {
    function callback(results) {
        res.redirect("/profile");
    }

    // Find the user's hash
    Writer.findAll({
        "attributes": ["hash"],
        "where"     : {"id": req.params.id}

    }).then(results => {
        // Verify the user
        bcrypt.compare(req.body.password_current, results[0].hash, (error, isMatch) => {
            if (isMatch) {
                // Salt and hash the new password
                bcrypt.hash(req.body.password_new, saltRounds, (error, hash) => {
                    Writer.update({hash}, {"where": {"id": req.params.id}});

                });
            }
        });

    }).then(callback);
});


router.delete("/delete-account/:id", (req, res) => {
    function callback(results) {
        // TODO: Reset cookie

        res.redirect("/");
    }

    Writer.destroy({
        "where": {"id": req.params.id}

    }).then(callback);
});



/****************************************************************************
 ****************************************************************************

    Set up routes (related to stories)

*****************************************************************************
*****************************************************************************/
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


router.post("/add-story", (req, res) => {
    function callback(results) {
        // TODO: Redirect to story.hbs with the correct id
    }

    // TODO: Store the photo url and caption in Photo table. (Randomly generate a caption for now.)

    // TODO later: If storing was successful, call Google Vision next
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


/* Optional
router.patch("/edit-story/:id", (req, res) => {
    function callback(results) {
        // TODO: Redirect to profile.hbs with the correct id
    }

    // TODO: Edit the story with the id

});
*/


router.delete("/delete-story/:id", (req, res) => {
    function callback(results) {
        // TODO: Redirect to profile.hbs with the correct id
        res.redirect("/profile.hbs");
    }
    Story.destroy({
      "where": req.params.id;
    }).then(callback);
    // TODO: Delete the story with the id
    
});


module.exports = router;
