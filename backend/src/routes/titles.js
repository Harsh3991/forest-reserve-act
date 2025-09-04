const express = require('express');
const router = express.Router();
const titleDeedController = require('../controllers/titleDeedController');
const { authenticate } = require('../middleware/auth');

// List title deeds
router.get('/', authenticate, titleDeedController.listTitleDeeds);

// Grant title deed
router.post('/', authenticate, titleDeedController.grantTitleDeed);

module.exports = router;