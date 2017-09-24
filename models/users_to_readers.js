module.exports = function(sequelize, DataTypes) {
    const users_to_readers = sequelize.define("users_to_reader", {
       "user_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": users,
                "key"  : "id"
            },
            "allowNull" : false
        },
        
        "reader_id": {
            "type"      : DataTypes.INTEGER,
            "references": {
                "model": users,
                "key"  : "id"
            },
            "allowNull" : false
        }
    });

    return users_to_readers;
}