module.exports = function(sequelize, DataTypes) {
    const users_to_writers = sequelize.define("users_to_writer", {
       "user_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": sequelize.users,
                "key"  : "id"
            },           
            "allowNull" : false
        },
        
        "writer_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": sequelize.users,
                "key"  : "id"
            },
            "allowNull" : false
        }

    }, {"underscored": true});

    return users_to_writers;
}