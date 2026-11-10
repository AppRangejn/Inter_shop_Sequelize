const createError = require('http-errors');
const { Store } = require('../db/models');

module.exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.findAll({
      limit: 10,
      order: [['id', 'ASC']],
      raw: true,
    });

    if (!stores.length) {
      return next(createError(404, 'Stores not found'));
    }

    res.status(200).json(stores);
  } catch (error) {
    next(error);
  }
};
