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
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        const sqlRequest = 'SELECT id, name, parent_id as parentId FROM category';
        return this.executeRequest(sqlRequest);
    };

    findByIdWithSiblings(id) {
        const sqlRequest = `WITH RECURSIVE CategoryTree AS (\n` +
            `  SELECT id, name, parent_id AS parentId\n` +
            `  FROM Category\n` +
            `  WHERE id = ${id}\n` +
            `  UNION ALL\n` +
            `  SELECT c.id, c.name, c.parent_id AS parentId\n` +
            `  FROM Category c\n` +
            `  JOIN CategoryTree ct ON ct.id = c.parent_id\n` +
            `)\n` +
            `SELECT * FROM CategoryTree;`

        return this.executeRequest(sqlRequest);
    };

    executeRequest(sqlRequest) {
        return this.common.findAll(sqlRequest).then(rows => {
            const categories = [];
            for (const row of rows) {
                categories.push(new Category(row.id, row.name, row.parentId));
            }
            return categories;
        });
    }

}

module.exports = CategoryDao;
