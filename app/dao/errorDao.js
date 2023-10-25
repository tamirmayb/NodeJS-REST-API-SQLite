/**
 * Dao Error Entity (ES6 Class)
 */
const logger = require("../logger/logger");

class ErrorDao {
    constructor(errorCode, message) {
        logger.error('[ ErrorDao ] created with error ' + message);
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = ErrorDao;
