/* Load Modules */
const express = require('express');
const logger = require("../../logger/logger");
const router = express.Router();

/* Load controller */
const CategoryController = require('../../controller/categoryController');
const controller = new CategoryController();

/**
 * Category Entity routes
 */

router.get('/:id', function (req, res) {
    logger.info('[ CategoryController ] is calling findById');
    controller.findById(req, res);
});

router.get('/', function (req, res) {
    logger.info('[ CategoryController ] is fetching all categories');
    controller.findAll(res);
});

module.exports = router;
