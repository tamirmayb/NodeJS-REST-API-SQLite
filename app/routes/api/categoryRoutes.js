/* Load Modules */
const express = require('express');
const logger = require("../../logger/logger");

const router = express.Router();
/* Load controller */
const CategoryController = require('../../controller/categoryController');
const categoryController = new CategoryController();

/**
 * Category Entity routes
 */

router.get('/:id', function (req, res) {
    logger.info('[ CategoryController ] is calling findById');
    categoryController.findById(req, res);
});

router.get('/', function (req, res) {
    logger.info('[ CategoryController ] is fetching all categories');
    categoryController.findAll(res);
});

module.exports = router;
