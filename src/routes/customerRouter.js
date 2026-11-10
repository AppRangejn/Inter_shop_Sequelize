const { Router } = require('express');
const customerController = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get(
  '/most-orders',
  customerController.getCustomerWithMostOrders,
);
customerRouter.get(
  '/most-expensive-item',
  customerController.getCustomerWithMostExpensiveItem,
);

customerRouter.get('/', customerController.getCustomers);

module.exports = customerRouter;
