const GramSabha = require('../models/GramSabha');

exports.listGramSabhas = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const sabhas = await GramSabha.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(sabhas);
  } catch (err) {
    next(err);
  }
};

exports.getGramSabhaById = async (req, res, next) => {
  try {
    const sabha = await GramSabha.findById(req.params.id);
    if (!sabha) return res.status(404).json({ error: 'Gram Sabha not found' });
    res.json(sabha);
  } catch (err) {
    next(err);
  }
};

exports.addGramSabha = async (req, res, next) => {
  try {
    if (!['admin', 'gram-sabha-official'].includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const sabha = new GramSabha(req.body);
    await sabha.save();
    res.status(201).json({ message: 'Gram Sabha added', sabha });
  } catch (err) {
    next(err);
  }
};