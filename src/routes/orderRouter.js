const { Router } = require('express');
const orderController = require('../controllers/orderController')

const orderRouter = Router();

orderRouter.get('/', orderController.getOrders);

module.exports = orderRouter;
