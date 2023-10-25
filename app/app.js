/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/* Database configuration */
const database = require('./config/createDatabase');

/* Init database */
database.init();

/* Init server listening */
const port = 3070;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
app.use(require('./routes/router'));

module.exports = app;
