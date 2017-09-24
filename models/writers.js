module.exports = function(sequelize, DataTypes) {
    const writers = sequelize.define("writer", {
       "user_id": {
            "type"     : DataTypes.INTEGER,
            "references": {
                "model": users,
                "key"  : "id"
            },           
            "allowNull": false,
            "validate" : {
            }
        },
        
        "writer_id": {
            "type"     : DataTypes.INTEGER,
            "references": {
                "model": users,
                "key"  : "id"
            },
            "allowNull": false,
            "validate" : {
            }
        }
    });

    return writers;
}