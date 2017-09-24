module.exports = function(sequelize, DataTypes) {
    const stories_to_photos = sequelize.define("stories_to_photo", {
        "story_id": {
            "type"     : DataTypes.INTEGER,
           "references": {
                "model": stories,
                "key"  : "id"
            },
            "allowNull": false,
            "validate" : {
            }
        },

        "photo_id": {
            "type"     : DataTypes.INTEGER,
           "references": {
                "model": photos,
                "key"  : "id"
            },
            "allowNull": false,
            "validate" : {
            }
        }
    });

    return stories_to_photos;
}