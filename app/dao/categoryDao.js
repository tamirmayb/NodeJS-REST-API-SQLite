/* Load category entity */
const category = require('../model/category');

/* Load service */
const categoryService = require('../service/categoryService');

/**
 * category Data Access Object
 */

class CategoryDao {

    constructor() {
        this.categoryService = new categoryService();
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
        return this.categoryService.findAll(sqlRequest).then(rows => {
            const categories = [];
            for (const row of rows) {
                categories.push(new category(row.id, row.name, row.parentId));
            }
            return categories;
        });
    }

}

module.exports = CategoryDao;
