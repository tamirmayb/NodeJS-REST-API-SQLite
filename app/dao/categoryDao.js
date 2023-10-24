/* Load Category entity */
const Category = require('../model/category');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Category Data Access Object
 */
class CategoryDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        const sqlRequest = 'SELECT id, name, parent_id as parentId FROM category WHERE id=$id';
        const sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Category(row.id, row.name, row.parentId));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        const sqlRequest = 'SELECT id, name, parent_id as parentId FROM category';
        console.log(2222);
        return this.common.findAll(sqlRequest).then(rows => {
            const categories = [];
            for (const row of rows) {
                categories.push(new Category(row.id, row.name, row.parentId));
            }
            return categories;
        });
    };

    findByIdWithSiblings() {
        const sqlRequest = 'SELECT id, name, parent_id as parentId FROM category';
        return this.common.findAll(sqlRequest).then(rows => {
            const categories = [];
            for (const row of rows) {
                categories.push(new Category(row.id, row.name, row.parentId));
            }
            return categories;
        });
    };

}

module.exports = CategoryDao;
