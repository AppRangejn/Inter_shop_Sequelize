const createError = require('http-errors');
const { Customer, sequelize } = require('../db/models');

module.exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.findAll({
      limit: 10,
      attributes: { exclude: ['password'] },
      order: [['id', 'ASC']],
      raw: true,
    });

    if (customers.length === 0) {
      return next(createError(404, 'Customers not found'));
    }

    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};

module.exports.getCustomerWithMostOrders = async (req, res, next) => {
  try {
    const customer = await Customer.findAll({
      attributes: [
        'id',
        'name',
        'email',
        [
          sequelize.literal(
            '(SELECT COUNT(*) FROM "Orders" WHERE "Orders"."customer" = "Customer"."id")',
          ),
          'purchases_count',
        ],
      ],
      order: [
        [sequelize.literal('purchases_count'), 'DESC'],
        ['id', 'ASC'],
      ],
      limit: 1,
      raw: true,
    });

    if (customer.length === 0) {
      return next(createError(404, 'Customer not found'));
    }

    res.status(200).json(customer[0]);
  } catch (error) {
    next(error);
  }
};

module.exports.getCustomerWithMostExpensiveItem = async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      attributes: [
        'id',
        'name',
        'email',
        [
          sequelize.literal(`(
            SELECT MAX("Items"."price")
            FROM "Orders"
            JOIN "ItemOrders" ON "ItemOrders"."order_id" = "Orders"."id"
            JOIN "Items" ON "Items"."id" = "ItemOrders"."item_id"
            WHERE "Orders"."customer" = "Customer"."id"
          )`),
          'max_item_price',
        ],
      ],
      order: [
        [sequelize.literal('max_item_price'), 'DESC NULLS LAST'],
        ['id', 'ASC'],
      ],
      raw: true,
    });

    if (!customer?.max_item_price) {
      return next(createError(404, 'Customer with purchased items not found'));
    }

    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};
