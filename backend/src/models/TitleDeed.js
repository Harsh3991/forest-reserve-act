const mongoose = require('mongoose');

const titleDeedSchema = new mongoose.Schema({
  claimId: { type: mongoose.Schema.Types.ObjectId, ref: 'Claim', required: true },
  citizenId: { type: mongoose.Schema.Types.ObjectId, ref: 'Citizen' },
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'GramSabha' },
  grantDate: { type: Date, required: true },
  documentUrl: { type: String, required: true },
  details: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('TitleDeed', titleDeedSchema);