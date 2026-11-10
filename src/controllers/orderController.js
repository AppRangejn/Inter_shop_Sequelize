const createError = require('http-errors');
const { Order, Customer } = require('../db/models');

module.exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      attributes: [
        'id',
        'code',
        'date',
        'amount',
        'paid',
        'createdAt',
        'updatedAt',
      ],
      include: {
        model: Customer,
        attributes: ['id', 'name', 'email'],
      },
      limit: 10,
      order: [['id', 'ASC']],
    });

    if (!orders.length) {
      return next(createError(404, 'Orders not found'));
    }

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
