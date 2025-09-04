const mongoose = require('mongoose');

const gramSabhaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  jurisdiction: { type: String },
  officials: [{ name: String, designation: String, contact: String }],
  contactInfo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('GramSabha', gramSabhaSchema);