/****************************************************************************
 ****************************************************************************
    
    Initialize
    
*****************************************************************************
*****************************************************************************/
// Import packages
const express        = require("express");
const exphbs         = require("express-handlebars");
const path           = require("path");
const methodOverride = require("method-override");
const bodyParser     = require("body-parser");

// Use express
const app  = express();
const PORT = process.env.PORT || 3000;



/****************************************************************************
 ****************************************************************************
    
    Set models
    
*****************************************************************************
*****************************************************************************/
// Import our models
const mai_db = require(path.join(__dirname, "models"));



/****************************************************************************
 ****************************************************************************
    
    Set views
    
*****************************************************************************
*****************************************************************************/
// Set public directory
const directory_public = path.join(__dirname, "public");
app.use(express.static(directory_public));

// Set up Express to handle parsing data
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": false}));

// Set handlebars
app.engine(".hbs", exphbs({
    "defaultLayout": "main",
    "extname"      : ".hbs"
}));

app.set("view engine", ".hbs");



/****************************************************************************
 ****************************************************************************
    
    Set controllers
    
*****************************************************************************
*****************************************************************************/
// Override POST methods to handle PATCH and DELETE
app.use(methodOverride("_method"));

// For Dropzone
app.use(express.static( __dirname + "/bower_components"));

// Set routers
const router_html = require(path.join(__dirname, "controllers", "html_routes.js"));
const router_api  = require(path.join(__dirname, "controllers", "api_routes.js"));

// Talk to routers
app.use("/", router_html);
//app.use("/api", router_api);



/****************************************************************************
 ****************************************************************************
    
    Listen for connections on the port
    
*****************************************************************************
*****************************************************************************/
mai_db.sequelize.sync().then(function() {
    app.listen(PORT, () => console.log(`App listening on ${PORT}.`));
});