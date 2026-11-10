const createError = require('http-errors');
const { ItemCategory } = require('../db/models');

module.exports.getItemCategories = async (req, res, next) => {
  try {
    const categories = await ItemCategory.findAll({
      limit: 10,
      order: [['id', 'ASC']],
      raw: true,
    });

    if (!categories.length) {
      return next(createError(404, 'Item categories not found'));
    }

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
