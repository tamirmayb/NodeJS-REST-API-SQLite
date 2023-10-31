/* Load database & database configuration */
const database = require('../db/createDatabase');

/* Load bluebird Promise */
const Promise = require('bluebird');

/* Load DAO Error entity */
const errorDao = require('../../utils/customError');
const logger = require("../logger/logger");
const CustomError = require("../../utils/customError");

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
                        new CustomError(20, "Internal server error")
                    );
                } else if (rows === null || rows.length === 0) {
                    logger.warn('[ CategoryService ] db fetch returned nothing');
                    reject(
                        new CustomError(21, "Searched category not found")
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }

}

module.exports = CategoryService;
