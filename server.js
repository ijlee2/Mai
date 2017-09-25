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

// Get our models
const mai_db = require(path.join(__dirname, "models"));

// Use express
const app  = express();
const PORT = process.env.PORT || 3000;



/****************************************************************************
 ****************************************************************************
    
    Set up views
    
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
app.engine("handlebars", exphbs({"defaultLayout": "main"}));
app.set("view engine", "handlebars");



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
// Override POST methods to handle PATCH and DELETE
app.use(methodOverride("_method"));

// Set routers
const router_html = require(path.join(__dirname, "controllers", "html_routes.js"));
const router_api  = require(path.join(__dirname, "controllers", "api_routes.js"));

// Talk to routers
app.use("/", router_html);
app.use("/api", router_api);



/****************************************************************************
 ****************************************************************************
    
    Listen for connections on the port
    
*****************************************************************************
*****************************************************************************/
//mai_db.sequelize.sync({"force": true}).then(function() {
    app.listen(PORT, () => console.log(`App listening on ${PORT}.`));
//});