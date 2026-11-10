const createError = require('http-errors');
const { ItemOrder, Order, Item, Brand } = require('../db/models');

module.exports.getItemOrders = async (req, res, next) => {
  try {
    const itemOrders = await ItemOrder.findAll({
      attributes: ['id', 'order_id', 'item_id'],
      include: [
        {
          model: Order,
          attributes: ['code', 'date'],
        },
        {
          model: Item,
          attributes: ['price'],
          include: {
            model: Brand,
            attributes: ['title'],
          },
        },
      ],
      limit: 10,
      order: [['id', 'ASC']],
    });

    if (!itemOrders.length) {
      return next(createError(404, 'Item orders not found'));
    }

    res.status(200).json(itemOrders);
  } catch (error) {
    next(error);
  }
};
