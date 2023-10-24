/**
 * Category Entity (ES6 Class)
 */

class Category {
    constructor(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
    }
}

module.exports = Category;
