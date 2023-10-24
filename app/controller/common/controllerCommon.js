const logger = require("../../logger/logger");

/**
 * Controllers Common functions
 */
class controllerCommon {

    findSuccess(res) {
        logger.info('[ Common ] fetch completed successfully');

        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404); // Not found
            res.json(error);
        }
    }

}

module.exports = controllerCommon;
