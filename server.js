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

// Set routers
const router_html = require(path.join(__dirname, "controllers", "html_routes.js"));
const router_api  = require(path.join(__dirname, "controllers", "api_routes.js"));

// For compose (TODO: merge router_api2.js with router_api.js later.)
const router_api2 = require(path.join(__dirname, "controllers", "api_routes2.js"));

// Talk to routers
app.use("/", router_html);
app.use("/api", router_api);
app.use("/api2", router_api2);



/****************************************************************************
 ****************************************************************************
    
    Listen for connections on the port
    
*****************************************************************************
*****************************************************************************/
mai_db.sequelize.sync({"force": true}).then(function() {
    app.listen(PORT, () => console.log(`App listening on ${PORT}.`));
});