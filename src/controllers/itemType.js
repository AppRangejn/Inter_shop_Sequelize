const createError = require('http-errors');
const { ItemType } = require('../db/models');

module.exports.getItemTypes = async (req, res, next) => {
  try {
    const types = await ItemType.findAll({
      limit: 10,
      order: [['id', 'ASC']],
      raw: true,
    });

    if (!types.length) {
      return next(createError(404, 'Item types not found'));
    }

    res.status(200).json(types);
  } catch (error) {
    next(error);
  }
};
