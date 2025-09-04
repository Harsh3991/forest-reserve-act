const express = require('express');
const router = express.Router();
const citizenController = require('../controllers/citizenController');
const { authenticate } = require('../middleware/auth');

// Profile
router.get('/me', authenticate, citizenController.getProfile);
router.put('/me', authenticate, citizenController.updateProfile);

// List citizens (admin only)
router.get('/', authenticate, citizenController.listCitizens);

module.exports = router;