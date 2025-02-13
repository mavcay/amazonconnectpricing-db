const express = require('express');
const router = express.Router();
const { getRegions } = require('../controllers/regionController');

router.get('/', getRegions);

module.exports = router; // ✅ Make sure we're exporting the router
