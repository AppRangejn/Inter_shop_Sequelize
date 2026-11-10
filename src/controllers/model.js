const createError = require('http-errors');
const { Model: ItemModel } = require('../db/models');

module.exports.getModels = async (req, res, next) => {
  try {
    const models = await ItemModel.findAll({
      limit: 10,
      order: [['id', 'ASC']],
      raw: true,
    });

    if (!models.length) {
      return next(createError(404, 'Models not found'));
    }

    res.status(200).json(models);
  } catch (error) {
    next(error);
  }
};
