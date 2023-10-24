/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/category', require('./api/categoryRoutes'));

module.exports = router;
