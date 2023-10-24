/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const CategoryController = require('../../controller/categoryController');
const categoryController = new CategoryController();

/**
 * Category Entity routes
 */

router.get('/:id', function (req, res) {
    categoryController.findById(req, res);
});

router.get('/', function (req, res) {
    categoryController.findAll(res);
});

module.exports = router;
