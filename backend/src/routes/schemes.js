const express = require('express');
const router = express.Router();
const schemeController = require('../controllers/schemeController');
const { authenticate } = require('../middleware/auth');

// List schemes
router.get('/', schemeController.listSchemes);

// Apply for a scheme
router.post('/apply', authenticate, schemeController.applyScheme);

module.exports = router;