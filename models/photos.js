module.exports = function(sequelize, DataTypes) {
    const photos = sequelize.define("photo", {
       "url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": {
                    "args": true,
                    "msg" : "Please enter a valid url."
                }
            }
        },
        
        "time_taken": {
            "type"     : DataTypes.DATE,
            "allowNull": false,
            "validate" : {
                "isDate": {
                    "args": true,
                    "msg" : "Please enter a valid date string."
                }
            }
        },
        
        "caption_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": captions,
                "key"  : "id"
            },
            "allowNull" : false
        }

    }, {"underscored": true});

    return photos;
}