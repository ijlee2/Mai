Dropzone.options.uploadWidget = {
    "paramName"  : "file",
    "maxFilesize": 5, // MB
    "maxFiles"   : 5,
    "dictDefaultMessage": "Drag photos here to upload, or click to select them.",
    "headers": {
        // TODO: Create a random CSRF (Cross-Site Request Forgery) token for extra security measure
//        "x-csrf-token": document.querySelectorAll("meta[name=csrf-token]")[0].getAttributeNode("content").value
        "x-csrf-token": "TODO_CREATE_A_RANDOM_TOKEN_HERE"
    },
    "acceptedFiles": "image/*",

    "init": function() {
        this.on("success", (file, res) => {
            console.log(file);
            console.log(res);
        });

        this.on("thumbnail", file => {
            if (file.width < 200 || file.height < 200) {
                file.rejectDimensions();

            } else {
                file.acceptDimensions();

            }
        });
    },

    "accept": function(file, done) {
        file.acceptDimensions = done;
        
        file.rejectDimensions = function() {
            done("The image must be at least 200 x 200px.");
        };
    }       
};