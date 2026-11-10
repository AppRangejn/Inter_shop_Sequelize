const createError = require('http-errors');
const { Brand } = require('../db/models');

module.exports.getAllBrands = async (req, res, next) => {
  try {
    const brands = await Brand.findAll({
      limit: 10,
      order: [['id', 'ASC']],
      raw: true,
    });

    if (brands.length === 0) {
      return next(createError(404, 'Brands not found'));
    }

    res.status(200).json(brands);
  } catch (error) {
    next(error);
  }
};

module.exports.getBrandsByTitles = async (req, res, next) => {
  try {
    const { titles } = req.body;
    const brands = await Brand.findAll({
      where: {
        title: titles,
      },
      order: [['id', 'ASC']],
      raw: true,
    });

    if (brands.length === 0) {
      return next(createError(404, 'Brands not found'));
    }

    res.status(200).json(brands);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteBrandsByTitles = async (req, res, next) => {
  try {
    const { titles } = req.body;
    const deletedCount = await Brand.destroy({
      where: {
        title: titles,
      },
    });

    if (deletedCount === 0) {
      return next(createError(404, 'No brands were found to delete'));
    }

    res.status(200).json({
      message: `${deletedCount} brand(s) deleted successfully.`,
    });
  } catch (error) {
    next(error);
  }
};
