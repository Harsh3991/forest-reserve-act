const express = require('express');
const router = express.Router();
const gramSabhaController = require('../controllers/gramSabhaController');
const { authenticate } = require('../middleware/auth');

// List Gram Sabhas
router.get('/', gramSabhaController.listGramSabhas);

// Get Gram Sabha by ID
router.get('/:id', gramSabhaController.getGramSabhaById);

// Add Gram Sabha (admin/official)
router.post('/', authenticate, gramSabhaController.addGramSabha);

module.exports = router;