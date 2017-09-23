module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("reader", {
       "user_id": {
            "type"     : DataTypes.INTEGER,
            "allowNull": false,
            "validate" : {
            }
        },
        
        "reader_id": {
            "type"     : DataTypes.INTEGER,
            "allowNull": false,
            "validate" : {
            }
        }
    });

    return reader;
}