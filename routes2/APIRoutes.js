"use strict";

const terminal = require("terminal-kit").terminal;
const express = require("express");


class APIroutes {

    constructor(delightDatabase) {

        this.delightDatabase = delightDatabase;

        this.router = express.Router();

        this.assignRouteListeners();
    }

    assignRouteListeners() {

        this.getAPIdelight();

        this.postAPIdelight();

        this.putAPIdelight();

        this.deleteAPIdelight();
    }

    getAPIdelight() {

        this.router.get("/api/delight", (request, response) => {

            //response.json(...);
        });
    }

    postAPIdelight() {

        this.router.post("/api/delight", (request, response) => {

            // const { name } = request.body;
            // let { ingredientIDs } = request.body;

            // ingredientIDs = JSON.parse(ingredientIDs);  //JSON.stringify (client) then JSON.parse (server) allows empty arrays to be used for POST 

            // if (this.validatePost(name, ingredientIDs)) {

            //     this.delightDatabase.addNewBurger(name, ingredientIDs).then((result) => {

            //         response.json(result);

            //     }).catch((error) => {

            //         terminal.red(`  Unable to save new burger:\n${error}`);

            //         response.status(500).send(error);
            //     });
            // }
            // else {

            //     terminal.red(`  Invalid POST data:\n`);
            //     console.log(name);
            //     console.log(ingredientIDs);

            //     response.status(422).send(`Invalid POST data:\n${name}\n${ingredientIDs}`);  //Unprocessable Entity (bad request data) 
            // }
        });
    }

    putAPIdelight() {

        this.router.put("/api/delight", (request, response) => {

            // const burgerToUpdate = request.body;

            // this.delightDatabase.updateBurger(burgerToUpdate).then(() => {

            //     response.status(200).end();

            // }).catch((error) => {

            //     terminal.red(`  Unable to update burger:\n${error}`);

            //     response.status(500).send(error);
            // });
        });
    }

    deleteAPIdelight() {

        this.router.delete("/api/delight/:id", (request, response) => {

            // const id = request.params.id;

            // this.delightDatabase.deleteBurger(id).then(() => {

            //     response.status(200).end();

            // }).catch((error) => {

            //     terminal.red(`  Unable to delete burger:\n${error}`);

            //     response.status(500).send(error);
            // });
        });
    }

    // validatePost(name, ingredientIDs) {

    //     if (typeof name !== "string" || name.length === 0) {

    //         return false;
    //     }

    //     if (name.length > 30) {

    //         return false;
    //     }

    //     if (!Array.isArray(ingredientIDs)) {

    //         return false;
    //     }

    //     for (const id of ingredientIDs) {

    //         if (typeof id !== "number" || id <= 0) {

    //             return false;
    //         }
    //     }

    //     return true;
    // }
}


module.exports = APIroutes;