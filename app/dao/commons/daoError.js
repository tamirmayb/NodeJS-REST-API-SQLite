/**
 * Dao Error Entity (ES6 Class)
 */
const logger = require("../../logger/logger");

class DaoError {
    constructor(errorCode, message) {
        logger.error('[ DaoError ] created with error ' + message);
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = DaoError;
