/**
 * Controllers Common functions
 */
class controllerCommon {

    findSuccess(res) {
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

    invalidParamError(res) {
        return (error) => {
            res.status(400); // Bad Request
            res.json(error);
        }
    }
}

module.exports = controllerCommon;
