const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
  type: { type: String, enum: ['individual', 'community', 'forest-resource'], required: true },
  citizenId: { type: mongoose.Schema.Types.ObjectId, ref: 'Citizen', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'under-review'], default: 'pending' },
  submissionDate: { type: Date, default: Date.now },
  documents: [{ type: String }],
  evidence: [{ type: String }],
  trackingId: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Claim', claimSchema);