module.exports = function(sequelize, DataTypes) {
    const users_to_stories = sequelize.define("user_to_story", {
       "user_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": users,
                "key"  : "id"
            },
            "allowNull" : false
        },
        
        "story_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": stories,
                "key"  : "id"
            },
            "allowNull" : false
        }

    }, {"underscored": true});

    return users_to_stories;
}