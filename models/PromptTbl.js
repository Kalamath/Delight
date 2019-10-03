"use strict";

const Sequelize = require("sequelize");

    function definePrompts(sequelize) {

        class Prompts extends Sequelize.Model {}

        const attributes = {

            prompt_string: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1, 255]
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
            modelName: "PromptTbl",
            timestamps: false
        };

        Prompts.init(attributes, options);

        return Prompts;
    }
module.exports = definePrompts