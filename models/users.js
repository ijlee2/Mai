module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        "id": {
            "type"        : DataTypes.UUID,
            "defaultValue": DataTypes.UUIDV4,
            "allowNull"   : false,
            "primaryKey"  : true
        },
        
        "fullname": {
            "type"     : DataTypes.STRING(100),
            "allowNull": false,
            "validate" : {
                "is": {
                    "args": /^[a-z-]+$/i,
                    "msg" : "Only letters and hyphens are allowed."
                },
                "len": {
                    "args": [1, 100],
                    "msg" : "Your name cannot exceed 100 characters."
                }
            }
        },

        "email": {
            "type"     : DataTypes.STRING(100),
            "allowNull": false,
            "validate" : {
                "isEmail": {
                    "args": true,
                    "msg" : "Please enter a valid email."
                },
                "unique": {
                    "args": true,
                    "msg" : "The email is already taken."
                },
                "len": {
                    "args": [1, 100],
                    "msg": "Your email cannot exceed 100 characters."
                }
            }
        },

        "username": {
            "type"     : DataTypes.STRING(32),
            "allowNull": false,
            "validate" : {
                "isAlphanumeric": {
                    "args": true,
                    "msg" : "Only letters and numbers are allowed."
                },
                "unique": {
                    "args": true,
                    "msg" : "The username is already taken."
                },
                "len": {
                    "args": [6, 32],
                    "msg" : "The username must have between 6 and 32 characters."
                }
            }
        },
        
        "hash": {
            "type"     : DataTypes.STRING(512),
            "allowNull": false,
        },

        "profile_url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": {
                    "args": true,
                    "msg" : "Please enter a valid url."
                }
            }
        },
        
        "flagged": {
            "type"        : DataTypes.BOOLEAN,
            "defaultValue": false,
        }

    }, {
        "associate": function(models) {
            User.hasMany(models.Story);

        },

        "underscored": true,
    });

    return User;
}