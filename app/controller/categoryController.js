/* Load Category Data Access Object */
const categoryDao = require('../dao/categoryDao');

/* Load Controller Common function */
const resultHandler = require('../service/resultHandler');

const logger = require('../logger/logger');

/**
 * Category Controller
 */
class CategoryController {

    constructor() {
        this.categoryDao = new categoryDao();
        this.resultHandler = new resultHandler();
    }

    /**
     * Tries to find all entities with root as Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        const id = req.params.id;

        logger.info('[ Category Controller ] is calling findById with input ' + id);

        if(!this._isValidCategoryId(id)) {
            logger.warn('[ Category Controller ] found invalid error ' + id);
            return res.status(400).json({error: 'Invalid Category id'});
        }

        this.categoryDao.findByIdWithSiblings(id)
            .then(this.resultHandler.findSuccess(res))
            .catch(this.resultHandler.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.categoryDao.findAll()
            .then(this.resultHandler.findSuccess(res))
            .catch(this.resultHandler.findError(res));
    };

    /**
     * Checks if value is a valid category using regex.
     * @params value
     * @return boolean
     */
    _isValidCategoryId(value) {
        return /^-?\d+$/.test(value);
    }
}

module.exports = CategoryController;
