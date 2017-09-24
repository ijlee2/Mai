module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define("user", {
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
        
        "alias": {
            "type"     : DataTypes.STRING(512),
            "allowNull": false,
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
    });

    return users;
}