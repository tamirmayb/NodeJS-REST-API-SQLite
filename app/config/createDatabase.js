/* Load modules */
const logger = require("../logger/logger");
const sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
const db = new sqlite3.Database('./sqlite.db');

/* Init category table if it does not exist */
const init = function () {
    logger.info('DB is starting');

    db.run("CREATE TABLE if not exists category (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " name TEXT," +
        " parent_id INT" +
        ")");

    db.exec("insert into main.category (id, name, parent_id)\n" +
        "values  (1, 'cat1', null),\n" +
        "        (2, 'cat2', 1),\n" +
        "        (3, 'cat3', 1),\n" +
        "        (4, 'cat4', 1),\n" +
        "        (5, 'cat5', 2),\n" +
        "        (6, 'cat6', 2),\n" +
        "        (7, 'cat7', 3),\n" +
        "        (8, 'cat8', 3),\n" +
        "        (9, 'cat9', 8),\n" +
        "        (10, 'cat10', 8) " +
        "ON CONFLICT (id) DO NOTHING" );

};
module.exports = {
    init: init,
    db: db
};

