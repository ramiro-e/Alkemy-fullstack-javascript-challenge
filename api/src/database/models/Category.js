module.exports =  (sequelize, DataTypes) => {
    let alias = "Category"
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
        tableName: "categories",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Transaction,{
            as: "category",
            foreingKey: "categoryId"
        });
    }
    
    return Category;
}