"use strict";

const Sequelize = require("sequelize");

//Example Model------------------------------------------------------------------------------------

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
            modelName: "Categories",
            timestamps: false
        }

    Categories.init(attributes, options);

    Categories.associate = (models) => {

        const associateOptions = {

            
        }
    }
        Categories.hasMany(models.Interests);

        Categories.belongsTo(models.Users);

        return Categories;
    };
module.exports = defineCategory;