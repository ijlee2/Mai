module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define("user", {
        "fullname": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "is"   : /^[a-z-]+$/i,
                "len"  : [2, 100]
            }
        },

        "email": {
            "type"       : DataTypes.STRING,
            "allowNull"  : false,
            "validate"   : {
                "isEmail": true,
                "unique" : true,
                "len"    : [2, 100]
            }
        },

        "username": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "unique": true,
                "isAlphanumeric": true,
                "len"           : [2, 20]
            }
        },
        
        "hash": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isAlphanumeric" : true,
                "len" : [6, 512]
            }
        },

        "photo_url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": true,
                "len"  : [2, 100]

            }
        },
        
        "flagged": {
            "type"        : DataTypes.BOOLEAN,
            "defaultValue": false,
        }
    });

    return users;
}