const express = require('express');
const { getStudyTips } = require('../controller/studyTipsController');

const router = express.Router();

router.get('/', getStudyTips);

module.exports = router;
