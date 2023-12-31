/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/* Database configuration */
const database = require('./db/createDatabase');

const logger = require("./logger/logger");

/* Init database */
database.init();

/* start server */
const port = 3070 ;
app.listen(port, function () {
    logger.info("Server listening on port : " + port + "...");
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
app.use(require('./routes/router'));

module.exports = app;
