module.exports = function(sequelize, DataTypes) {
    const Story = sequelize.define("Story", {
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
        }

    }, {"underscored": true});

    // Create associations
    Story.associate = function(models) {
        Story.belongsTo(models.User, {"onDelete": "CASCADE"});
        Story.hasMany(models.Photo);
    }

    return Story;
}