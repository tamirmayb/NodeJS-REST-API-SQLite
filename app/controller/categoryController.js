/* Load Category Data Access Object */
const CategoryDao = require('../dao/categoryDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/**
 * Category Controller
 */
class CategoryController {

    constructor() {
        this.categoryDao = new CategoryDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find all entities with root as Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        const id = req.params.id;

        if(!this._isValidCategoryId(id)) {
            return res.status(400).json({error: 'Invalid Category id'});
        }

        this.categoryDao.findByIdWithSiblings(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.categoryDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    _isValidCategoryId(value) {
        return /^-?\d+$/.test(value);
    }
}

module.exports = CategoryController;
