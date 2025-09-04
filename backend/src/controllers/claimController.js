const Claim = require('../models/Claim');
const { generateTrackingId } = require('../utils/generators');
const { sendNotification } = require('../utils/notifications');

exports.submitClaim = async (req, res, next) => {
  try {
    const trackingId = generateTrackingId();
    const claim = new Claim({
      ...req.body,
      citizenId: req.user.id,
      trackingId,
      documents: req.files ? req.files.map(f => f.path) : [],
    });
    await claim.save();
    sendNotification(req.user.email, 'Claim Submitted', `Your claim has been submitted. Tracking ID: ${trackingId}`);
    res.status(201).json({ message: 'Claim submitted', trackingId });
  } catch (err) {
    next(err);
  }
};

exports.getMyClaims = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const claims = await Claim.find({ citizenId: req.user.id })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(claims);
  } catch (err) {
    next(err);
  }
};

exports.getClaimByTrackingId = async (req, res, next) => {
  try {
    const claim = await Claim.findOne({ trackingId: req.params.trackingId });
    if (!claim) return res.status(404).json({ error: 'Claim not found' });
    res.json(claim);
  } catch (err) {
    next(err);
  }
};

exports.updateClaimStatus = async (req, res, next) => {
  try {
    if (!['admin', 'gram-sabha-official'].includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const claim = await Claim.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!claim) return res.status(404).json({ error: 'Claim not found' });
    sendNotification(claim.citizenId.email, 'Claim Status Updated', `Your claim status is now: ${claim.status}`);
    res.json(claim);
  } catch (err) {
    next(err);
  }
};