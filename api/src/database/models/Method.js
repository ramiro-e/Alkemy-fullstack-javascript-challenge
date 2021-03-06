module.exports =  (sequelize, DataTypes) => {
    let alias = "Method"
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "methods",
        timestamps: false
    }
    const Method = sequelize.define(alias, cols, config);

    Method.associate = function (models) {
        Method.hasMany(models.Transaction,{
            as: "method",
            foreingKey: "methodId"
        });
    }
    
    return Method;
}