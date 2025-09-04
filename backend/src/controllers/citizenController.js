const Citizen = require('../models/Citizen');
const { validateCitizenUpdate } = require('../utils/validation');

exports.getProfile = async (req, res, next) => {
  try {
    const citizen = await Citizen.findById(req.user.id).select('-password');
    if (!citizen) return res.status(404).json({ error: 'Citizen not found' });
    res.json(citizen);
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { error } = validateCitizenUpdate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const citizen = await Citizen.findByIdAndUpdate(req.user.id, req.body, { new: true }).select('-password');
    res.json(citizen);
  } catch (err) {
    next(err);
  }
};

exports.listCitizens = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    const { page = 1, limit = 10 } = req.query;
    const citizens = await Citizen.find()
      .select('-password')
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(citizens);
  } catch (err) {
    next(err);
  }
};