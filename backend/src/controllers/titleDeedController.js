const TitleDeed = require('../models/TitleDeed');

exports.listTitleDeeds = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const deeds = await TitleDeed.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(deeds);
  } catch (err) {
    next(err);
  }
};

exports.grantTitleDeed = async (req, res, next) => {
  try {
    if (!['admin', 'gram-sabha-official'].includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const deed = new TitleDeed(req.body);
    await deed.save();
    res.status(201).json({ message: 'Title deed granted', deed });
  } catch (err) {
    next(err);
  }
};