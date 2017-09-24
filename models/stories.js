module.exports = function(sequelize, DataTypes) {
    const stories = sequelize.define("story", {
        "url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": {
                    "args": true,
                    "msg" : "Please enter a valid url."
                }
            }
        }
    });

    return stories;
}