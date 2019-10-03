"use strict";

const terminal = require("terminal-kit").terminal;
const express = require("express");


class HTMLroutes {

    constructor(delightDatabase) {

        this.delightDatabase = delightDatabase;

        this.router = express.Router();

        this.assignRouteListeners();
    }

    assignRouteListeners() {

        this.getHomePage();
    }

    getHomePage() {

        this.router.get("/", (request, response) => {

            // const handleBarsOBJ = {};

            // const burgersPromise = this.delightDatabase.getAllBurgers();

            // burgersPromise.then((burgers) => {
      
            //     handleBarsOBJ.burgers = burgers;
            // });

            // const ingredientsPromise = this.delightDatabase.getAllIngredients();

            // ingredientsPromise.then((ingredients) => {
        
            //     handleBarsOBJ.ingredients = ingredients;
            // });

            // Promise.all([burgersPromise, ingredientsPromise]).then(() => {
  
            //     response.render("index", handleBarsOBJ);

            // }).catch((error) => {

            //     response.status(500).send(error);
            // });
        });
    }
}


module.exports = HTMLroutes;