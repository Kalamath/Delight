"use strict";

const Sequelize = require("sequelize");


function defineCategory(sequelize){
    class Categories extends Sequelize.Model {}
     
        const attributes = {

            category_name: {
                type: Sequelize.String,
                allowNull: false,
                validate: {
                    len: [1, 255]
                }
            }
        },

        const options = {
            sequelize,
            modelName: "CategoryTable",
            timestamps: false
        }

    Categories.init(attributes, options);

    Categories.associate = (models) => {

        const associateOptions = {
            foreignKey: "fk_interest_id",
            onDelete: "null",
            onUpdate: "null"
            
        }
    }
        Categories.hasMany(models.Interests);

        Categories.belongsTo(models.Users);

        return Categories;
    };
module.exports = defineCategory;