module.exports = function(sequelize, DataTypes) {
    const Caption = sequelize.define("Caption", {
        "id": {
            "type"        : DataTypes.UUID,
            "defaultValue": DataTypes.UUIDV4,
            "allowNull"   : false,
            "primaryKey"  : true
        },
        
        "text": {
            "type"     : DataTypes.TEXT,
            "allowNull": false,
            "validate" : {
                "notEmpty": {
                    "args": true,
                    "msg" : "Please enter a caption."
                }
            }
        }

    }, {
        "associate": function(models) {
            Caption.belongsToMany(models.Photo);

        },
        
        "underscored": true,
    });

    return Caption;
}