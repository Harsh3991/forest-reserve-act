const Citizen = require('../models/Citizen');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateCitizenRegistration } = require('../utils/validation');

exports.register = async (req, res, next) => {
  try {
    const { error } = validateCitizenRegistration(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, aadhaarNumber, password } = req.body;
    const existing = await Citizen.findOne({ $or: [{ email }, { aadhaarNumber }] });
    if (existing) return res.status(409).json({ error: 'Email or Aadhaar already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const citizen = new Citizen({ ...req.body, password: hashedPassword });
    await citizen.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const citizen = await Citizen.findOne({ email });
    if (!citizen) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, citizen.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: citizen._id, role: citizen.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ token, role: citizen.role });
  } catch (err) {
    next(err);
  }
};