module.exports = function(sequelize, DataTypes) {
    const Writer = sequelize.define("Writer", {
        "id": {
            "type"        : DataTypes.UUID,
            "defaultValue": DataTypes.UUIDV4,
            "allowNull"   : false,
            "primaryKey"  : true
        },
        
        "fullname": {
            "type"     : DataTypes.STRING(100)
        },

        "email": {
            "type"     : DataTypes.STRING(100)
        },

        "username": {
            "type"     : DataTypes.STRING(32)
        },
        
        "hash": {
            "type"     : DataTypes.STRING(60)
        },

        "profile_url": {
            "type"        : DataTypes.STRING
        },
        
        "flagged": {
            "type"        : DataTypes.BOOLEAN
        }

    }, {"underscored": true});

    // Create associations
    Writer.associate = function(models) {
        Writer.hasMany(models.Story);
        Writer.hasMany(models.Reader);
    }

    return Writer;
}