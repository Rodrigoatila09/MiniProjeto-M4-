const express = require('express');
const { getPerformance } = require('../controller/performanceController.js');

const router = express.Router();

router.get('/', getPerformance);

module.exports = router;