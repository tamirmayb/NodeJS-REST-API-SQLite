/* Load database & database configuration */
const database = require('../../config/dbconfig');

/* Load bluebird Promise */
const Promise = require('bluebird');

/* Load DAO Error entity */
const DaoError = require('./daoError');
const logger = require("../../logger/logger");

/**
 * DAOs Common functions
 */
class Common {

    findAll(sqlRequest) {
        return new Promise(function (resolve, reject) {
            database.db.all(sqlRequest, function (err, rows) {
                if (err) {
                    logger.error('[ Common ] db fetch failed about to send code 500');
                    reject(
                        new DaoError(20, "Internal server error")
                    );
                } else if (rows === null || rows.length === 0) {
                    logger.warn('[ Common ] db fetch returned nothing');
                    reject(
                        new DaoError(21, "Searched category not found")
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }

}

module.exports = Common;
