const express = require('express');
const { getRegions, addRegion } = require('../controllers/regionsController');
const router = express.Router();

router.get('/', getRegions);
router.post('/', addRegion);

module.exports = router;
