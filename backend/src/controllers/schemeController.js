const Scheme = require('../models/Scheme');

exports.listSchemes = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const schemes = await Scheme.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(schemes);
  } catch (err) {
    next(err);
  }
};

exports.applyScheme = async (req, res, next) => {
  try {
    // Application logic here (e.g., save application to DB)
    res.status(201).json({ message: 'Scheme application submitted' });
  } catch (err) {
    next(err);
  }
};