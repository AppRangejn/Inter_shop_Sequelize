const createError = require('http-errors');
const { Item, sequelize } = require('../db/models');

module.exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.findAll({
      limit: 10,
      order: [['id', 'ASC']],
      raw: true,
    });

    if (items.length === 0) {
      return next(createError(404, 'Items not found'));
    }

    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

module.exports.getItemsAfterId = async (req, res, next) => {
  try {
    const items = await Item.findAll({
      where: sequelize.literal('"id" > (SELECT COUNT(*) / 2 FROM "Items")'),
      order: [['id', 'ASC']],
      raw: true,
    });

    if (items.length === 0) {
      return next(createError(404, 'Items not found'));
    }

    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

module.exports.updateItemPriceAndQuantity = async (req, res, next) => {
  try {
    const { price, quantity } = req.body;
    const [updatedCount] = await Item.update(
      {
        price: price,
        quantity: quantity,
      },
      {
        where: { id: req.params.id },
      },
    );

    if (updatedCount === 0) {
      return next(createError(404, 'Item with specified ID not found'));
    }

    res.status(200).json({
      message: `${updatedCount} item(s) updated successfully.`,
    });
  } catch (error) {
    next(error);
  }
};
