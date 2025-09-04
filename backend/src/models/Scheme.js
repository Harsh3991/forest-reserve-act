const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  eligibility: { type: String },
  benefits: { type: String },
  applicationProcess: { type: String },
  documentsRequired: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Scheme', schemeSchema);