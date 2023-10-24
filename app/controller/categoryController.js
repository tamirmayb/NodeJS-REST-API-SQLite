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
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        const id = req.params.id;

        this.categoryDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Tries to find all entities with root as Id / Primary Key
     * @params req, res
     * @return entity
     */
    findByIdWithSiblings(req, res) {
        const id = req.params.id;

        this.categoryDao.findByIdWithSiblings(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        console.log(1111);
        this.categoryDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = CategoryController;
