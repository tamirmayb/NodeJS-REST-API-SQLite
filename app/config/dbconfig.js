/* Load modules */
const sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
const db = new sqlite3.Database('./sqlite.db');

/* Init category table if they don't exist */
const init = function () {
    db.run("CREATE TABLE if not exists category (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " name TEXT," +
        " parent_id INT" +
        ")");

    // db.run("insert into category (id, name, parent_id) VALUES\n" +
    //     "  (1, 'root', null), \n" +
    //     "  (2, 'cat2', 1), \n" +
    //     "  (3, 'cat3', 1),\n" +
    //     "  (4, 'cat4', 3)");

};
module.exports = {
    init: init,
    db: db
};

