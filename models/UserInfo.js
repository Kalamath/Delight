"use strict";

const Sequelize = require("sequelize");

    function defineUserInfo(sequelize) {

        class UserInfo extends Sequelize.Model {}

        const attributes = {
            
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len = [1, 255]
                }
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len = [1, 255]
                }
            },

            fk_category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true
                }
            }
        };

        const options = {
            sequelize,
            modelName: "UserInfo",
            timestamps: false
        };

        UserInfo.init(attributes, options);

        UserInfo.associate = models => {
            
            const associateOptions1 = {
                foreignKey: "fk_category_id",
                onDelete: "cascade",
                onUpdate: "cascade"
            };

            UserInfo.hasOne(models.Categories, associateOptions1);
        };

        return UserInfo;
    }
    module.exports = defineUserInfo;
