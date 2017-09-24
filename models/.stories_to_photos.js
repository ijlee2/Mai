module.exports = function(sequelize, DataTypes) {
    const stories_to_photos = sequelize.define("stories_to_photo", {
        "story_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": sequelize.stories,
                "key"  : "id"
            },
            "allowNull" : false
        },

        "photo_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": sequelize.photos,
                "key"  : "id"
            },
            "allowNull" : false
        }

    }, {"underscored": true});

    return stories_to_photos;
}