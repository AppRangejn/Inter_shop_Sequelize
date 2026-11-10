const { Router } = require('express');
const itemOrderController = require('../controllers/itemOrder');

const itemOrderRouter = Router();

itemOrderRouter.get('/', itemOrderController.getItemOrders);

module.exports = itemOrderRouter;
