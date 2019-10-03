"use strict";

const Sequelize = require("sequelize");

    function defineChat(sequelize) {

        class Chat extends Sequelize.Model {}

        const attributes = {

            message_string: {
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
            modelName: "ChatTable",
            timestamps: false
        };

        Chat.init(attributes,options);

        return Chat;
    }
module.exports = defineChat