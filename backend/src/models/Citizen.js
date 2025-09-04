const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, enum: ['ST', 'OTFD'], required: true },
  familyMembers: [{ name: String, relation: String, age: Number }],
  documents: [{ type: String }],
  role: { type: String, enum: ['citizen', 'admin', 'gram-sabha-official'], default: 'citizen' },
}, { timestamps: true });

module.exports = mongoose.model('Citizen', citizenSchema, 'citizen-data');