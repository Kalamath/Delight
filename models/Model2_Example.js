"use strict";

const Sequelize = require("sequelize");

//Example Model------------------------------------------------------------------------------------


    function defineInterests(sequelize) {

        class Interests extends Sequelize.Model {}
    
        const attributes = {
            
            interest_name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1, 255]
                }
            },

            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true
                }
            },

            createdAt: {
                type: "TIMESTAMP",
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            }
        };

        const options = {
            sequelize,
            modelName: "Interests",
            timestamps: false
        };

        Interests.init(attributes,options);

        Interests.associate = (models) => {

            const associateOptions = {
                foreignKey: "fk_category_id",
                onDelete: "null",
                onUpdate: "null"
            };

            Interests.belongsTo(models.Categories,associateOptions)
        };

        return Interests;

    }

module.exports = defineInterests

//     class Ingredients extends Sequelize.Model {}

//     const attributes = {

//         name: {
//             type: Sequelize.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1, 255]
//             }
//         },
//         createdAt: {
//             type: "TIMESTAMP",
//             allowNull: false,
//             defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
//         }
//     };

//     const options = {
//         sequelize,
//         modelName: "Ingredients",
//         timestamps: false
//     };

//     Ingredients.init(attributes, options);

//     Ingredients.associate = (models) => {

//         const associateOptions = {
//             foreignKey: "fk_ingredient_id",
//             onDelete: "cascade",
//             onUpdate: "cascade"
//         };

//         Ingredients.hasMany(models.Burger_Ingredients, associateOptions);
//     };

//     return Ingredients;
// }


// module.exports = defineIngredients;