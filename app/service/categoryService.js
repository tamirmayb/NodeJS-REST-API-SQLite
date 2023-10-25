/* Load database & database configuration */
const database = require('../config/createDatabase');

/* Load bluebird Promise */
const Promise = require('bluebird');

/* Load DAO Error entity */
const errorDao = require('../dao/errorDao');
const logger = require("../logger/logger");

/**
 * CategoryService functions
 */
class CategoryService {

    findAll(sqlRequest) {
        return new Promise(function (resolve, reject) {
            database.db.all(sqlRequest, function (err, rows) {
                if (err) {
                    logger.error('[ CategoryService ] db fetch failed about to send code 500');
                    reject(
                        new errorDao(20, "Internal server error")
                    );
                } else if (rows === null || rows.length === 0) {
                    logger.warn('[ CategoryService ] db fetch returned nothing');
                    reject(
                        new errorDao(21, "Searched category not found")
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }

}

module.exports = CategoryService;
