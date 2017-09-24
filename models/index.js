// Source: http://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
//"use strict";

// Import packages
//const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");

//const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || "development";
const config    = require(path.join(__dirname, "..", "config", "config.json"))[env];

// Add all tables in our database to a single object
const mai_db = {};

const sequelize = (config.use_env_variable)
                ? new Sequelize(process.env[config.use_env_variable])
                : new Sequelize(config.database, config.username, config.password, config);

mai_db.sequelize = sequelize;
mai_db.Sequelize = Sequelize;

// Import tables
mai_db.users             = require(path.join(__dirname, "users.js"))(sequelize, Sequelize);
mai_db.stories           = require(path.join(__dirname, "stories.js"))(sequelize, Sequelize);
mai_db.captions          = require(path.join(__dirname, "captions.js"))(sequelize, Sequelize);

mai_db.photos            = require(path.join(__dirname, "photos.js"))(sequelize, Sequelize);

mai_db.users_to_writers  = require(path.join(__dirname, "users_to_writers.js"))(sequelize, Sequelize);
mai_db.users_to_readers  = require(path.join(__dirname, "users_to_readers.js"))(sequelize, Sequelize);
mai_db.users_to_stories  = require(path.join(__dirname, "users_to_stories.js"))(sequelize, Sequelize);
mai_db.stories_to_photos = require(path.join(__dirname, "stories_to_photos.js"))(sequelize, Sequelize);

// Define relations
mai_db.photos.hasOne(mai_db.captions);
mai_db.users_to_writers.hasOne(mai_db.captions);
mai_db.users_to_readers.hasOne(mai_db.captions);
mai_db.users_to_stories.hasOne(mai_db.captions);
mai_db.stories_to_photos.hasOne(mai_db.captions);

module.exports = mai_db;