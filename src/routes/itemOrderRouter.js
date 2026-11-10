const { Router } = require('express');
const itemOrderController = require('../controllers/itemOrderController');

const itemOrderRouter = Router();

itemOrderRouter.get('/', itemOrderController.getItemOrders);

module.exports = itemOrderRouter;
