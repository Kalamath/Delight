"use strict";

const path = require("path");


function getFullPath(relativePath) {

    return path.join(__dirname, relativePath);
}

const configPaths =
{
    configConnectionDetailsPath: getFullPath("../config/configConnectionDetails.js"),
    delightDatabasePath:         getFullPath("../db/DelightDatabase.js"),
    delightSeedsPath:            getFullPath("../db/seeds.js"),
    sequelizeDatabasePath:       getFullPath("../models/SequelizeDatabase.js"),
    publicAssetsPath:            getFullPath("../public"),
    indexHTMLPath:               getFullPath("../public/html/index.html"),
    apiRoutesPath:               getFullPath("../routes/APIroutes.js"),
    delightChatRoomsPath:        getFullPath("../routes/DelightChatRooms.js"),
    htmlRoutesPath:              getFullPath("../routes/HTMLroutes.js"),
    printHeaderFunctionsPath:    getFullPath("../utility/printHeaderFunctions.js")
};


module.exports = configPaths;