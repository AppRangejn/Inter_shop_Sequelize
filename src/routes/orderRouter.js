const { Router } = require('express');
const orderController = require('../controllers/order')

const orderRouter = Router();

orderRouter.get('/', orderController.getOrders);

module.exports = orderRouter;
