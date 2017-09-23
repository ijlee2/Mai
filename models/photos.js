module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("photo", {
       "photo_url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": true
            }
        },
        
        "caption": {
            "type"     : DataTypes.TEXT,
            "allowNull": false,
            "validate" : {
            }
        }
    });

    return photo;
}