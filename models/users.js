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
                    "args": /^[a-z\s-']+$/i,
                    "msg" : "Only letters, spaces, hyphens, and apostrophes are allowed."
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
            "unique"   : true,
            "validate" : {
                "isEmail": {
                    "args": true,
                    "msg" : "Please enter a valid email."
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
            "unique"   : true,
            "validate" : {
                "is": {
                    "args": /^[a-z0-9.]+$/i,
                    "msg" : "Only letters, numbers, and periods are allowed."
                },
                "len": {
                    "args": [4, 32],
                    "msg" : "The username must have between 4 and 32 characters."
                }
            }
        },
        
        "hash": {
            "type"     : DataTypes.STRING(60),
            "allowNull": false,
        },

        "profile_url": {
            "type"        : DataTypes.STRING,
            "validate"    : {
                "isURL"   : {
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