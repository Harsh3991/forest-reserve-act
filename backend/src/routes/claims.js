const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claimController');
const { authenticate } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

// Submit claim
router.post('/', authenticate, upload.array('documents'), claimController.submitClaim);

// Get claims for user
router.get('/my', authenticate, claimController.getMyClaims);

// Get claim by trackingId
router.get('/:trackingId', authenticate, claimController.getClaimByTrackingId);

// Update claim status (admin/official)
router.put('/:id/status', authenticate, claimController.updateClaimStatus);

module.exports = router;