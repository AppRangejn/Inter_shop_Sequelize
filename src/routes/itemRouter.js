const { Router } = require('express');
const itemController = require('../controllers/item');

const itemRouter = Router();

itemRouter.get('/', itemController.getItems);

itemRouter.get('/after-id', itemController.getItemsAfterId);

itemRouter.patch('/:id', itemController.updateItemPriceAndQuantity);

module.exports = itemRouter;
