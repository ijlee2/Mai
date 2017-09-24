module.exports = function(sequelize, DataTypes) {
    const captions = sequelize.define("caption", {
        "caption": {
            "type"     : DataTypes.TEXT,
            "allowNull": false,
            "validate" : {
                "notEmpty": {
                    "args": true,
                    "msg" : "Please enter a caption."
                }
            }
        }

    }, {"underscored": true});

    return captions;
}