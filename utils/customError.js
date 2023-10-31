/**
 * Dao Error Entity (ES6 Class)
 */
const logger = require("../app/logger/logger");

class CustomError {
    constructor(errorCode, message) {
        logger.error('[ Error ] created with message ' + message);
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = CustomError;
