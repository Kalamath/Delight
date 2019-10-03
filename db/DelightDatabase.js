"use strict";

const configPaths = require("../config/configPaths.js");
const SequelizeDatabase = require(configPaths.sequelizeDatabasePath);
const seeds = require(configPaths.delightSeedsPath);


class DelightDatabase extends SequelizeDatabase {

    constructor() {

        super();
    }

    seedDatabase() {

        return new Promise((resolve, reject) => {

            // add seeding code here using seeds variable above



            //example----------------------------------------------------------
            const promises = [];

            const categoryPromise = this.SequelizeDatabase.DelightDatabase.lkp_category.bulkCreate(seeds.lkp_category);

            promises.push(categoryPromise);

            const interestsPromise = this.SequelizeDatabase.DelightDatabase.lkp_interests.bulkCreate(seeds.lkp_interests);

            promises.push(interestsPromise);

            const promptPromise = this.SequelizeDatabase.DelightDatabase.prompts.bulkCreate(seeds.prompts)

            promises.push(promptPromise);

            Promise.all(promises).then(() => {

            //     this.database.Burger_Ingredients.bulkCreate(seeds.burger_ingredients).then(() => {

                    resolve();

                }).catch((error) => {

                    reject(error);
                });

            }).catch((error) => {

                reject(error);
            });
        }

    //Example for doing an inner join and then pre-processing a pruned handlebars object-----------

    // getAllBurgers() {

    //     return new Promise((resolve, reject) => {

    //         const options = 
    //         {
    //             raw: true,
    //             include: [this.database.Burgers, this.database.Ingredients],
    //             order: [["fk_burger_id"], ["fk_ingredient_id"]]
    //         };

    //         this.database.Burger_Ingredients.findAll(options).then((BurgerIngredients) => {

    //             const burgers = [];

    //             for (const burgerIngredient of BurgerIngredients) {

    //                 const ingredient = burgerIngredient["Ingredient.name"];

    //                 const burger = {};

    //                 burger.id = burgerIngredient["Burger.id"];
    //                 burger.name = burgerIngredient["Burger.name"];
    //                 burger.devoured = burgerIngredient["Burger.devoured"];
    //                 burger.ingredients = [];

    //                 if (burgers.length === 0 || burgers[burgers.length - 1].id !== burger.id) {

    //                     burger.ingredients.push(ingredient);

    //                     burgers.push(burger);
    //                 }
    //                 else {

    //                     burgers[burgers.length - 1].ingredients.push(ingredient);
    //                 }
    //             }

    //             resolve(burgers);

    //         }).catch((error) => {

    //             reject(error);
    //         });
    //     });
    // }


    //Example for a basic FINDALL from a table-----------------------------------------------------

    //getAllInterests() {

      //  const options = 
        //{
          //  raw: true
        //};

    //     const promise = this.database.Ingredients.findAll(options);
        
    //     return promise;
       
    //};

    //Example for an ADD that needs to update several tables---------------------------------------

    addNewUser(id, username, password, fk_category_id) {

    //     return new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {

            const newAccountObj = 
            {
                id,
                username,
                password,
                fk_category_id
            };
            this.SequelizeDatabase.DelightDatabase.user_info.create(newAccountObj).then((result)=>{
                
                const newUserID = result.dataValues.id;

                const username = result.dataValues.username;

                const password = result.dataValues.password;
            })

            this.SequelizeDatabase.DelightDatabase
        })
    };
    //         const newBurgerObj = 
    //         {
    //             name,
    //             devoured: false
    //         };

    //         this.database.Burgers.create(newBurgerObj).then((result) => {

    //             const newBurgerId = result.dataValues.id;

    //             const burgerIngredients = [];

    //             for (const ingredientId of ingredientIDs) {

    //                 const newBurgerIngredient = 
    //                 {
    //                     fk_burger_id: newBurgerId,
    //                     fk_ingredient_id: ingredientId
    //                 };

    //                 burgerIngredients.push(newBurgerIngredient);
    //             }

    //             this.database.Burger_Ingredients.bulkCreate(burgerIngredients).then(() => {

    //                 resolve(result.dataValues);

    //             }).catch((error) => {

    //                 reject(error);
    //             });

    //         }).catch((error) => {

    //             reject(error);
    //         });
    //     });
    // }

    //example for a basic UPDATE-------------------------------------------------------------------

    updateAccount(user_info) {
        
        const options =
            {
                where: { id: user_info.id }
            };

            const promise = this.SequelizeDatabase.DelightDatabase.user_info.update(accountToUpdate, options);

            return promise
    };

    deleteAccount(id) {

        const options = 
        {
            where: { id }
        };

        const promise = this.SequelizeDatabase.DelightDatabase.user_info.destroy(options)

        return promise;
    };
    //     const options = 
    //     {
    //         where: { id: burgerToUpdate.id }
    //     };

    //     const promise = this.database.Burgers.update(burgerToUpdate, options);

    //     return promise;
    // }

    //example for a basic DELETE (it removes other rows because of CASCADING)----------------------

    // deleteBurger(id) {

    //     const options = 
    //     {
    //         where: { id }
    //     };

    //     const promise = this.database.Burgers.destroy(options);

    //     return promise;
    // }
}

module.exports = DelightDatabase;