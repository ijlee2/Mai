module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("user_to_story", {
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
        }
    });

    return user_to_story;
}