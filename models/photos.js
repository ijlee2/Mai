module.exports = function(sequelize, DataTypes) {
    const Photo = sequelize.define("Photo", {
        "id": {
            "type"        : DataTypes.UUID,
            "defaultValue": DataTypes.UUIDV4,
            "allowNull"   : false,
            "primaryKey"  : true
        },
        
       "url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": {
                    "args": true,
                    "msg" : "Please enter a valid url."
                }
            }
        },
        
        "time_taken": {
            "type"     : DataTypes.DATE,
            "allowNull": false,
            "validate" : {
                "isDate": {
                    "args": true,
                    "msg" : "Please enter a valid date string."
                }
            }
        }

    }, {
        "associate": function(models) {
            Photo.belongsTo(models.Story);
            Photo.hasOne(models.Caption);

        },
        
        "underscored": true,
    });

    return Photo;
}