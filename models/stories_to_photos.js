module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("stories_to_photo", {
       "user_id": {
            "type"     : DataTypes.INTEGER,
            "allowNull": false,
            "validate" : {
            }
        },
        
        "story_id": {
            "type"     : DataTypes.INTEGER,
            "allowNull": false,
            "validate" : {
            }
        },
        "photo_id": {
            "type"     : DataTypes.INTEGER,
            "allowNull": false,
            "validate" : {
            }
        }
    });

    return stories_to_photos;
}