module.exports = function(sequelize, DataTypes) {
    const users_to_stories = sequelize.define("user_to_story", {
       "user_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": sequelize.users,
                "key"  : "id"
            },
            "allowNull" : false
        },
        
        "story_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": sequelize.stories,
                "key"  : "id"
            },
            "allowNull" : false
        }

    }, {"underscored": true});

    return users_to_stories;
}