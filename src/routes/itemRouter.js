const { Router } = require('express');
const itemController = require('../controllers/item');
const { updateItemSchema } = require('../utils/validationSchemas');
const { validate } = require('../middlewares/validate.mw');

const itemRouter = Router();

itemRouter.get('/', itemController.getItems);

itemRouter.get('/after-id', itemController.getItemsAfterId);

itemRouter.patch(
  '/:id',
  validate(updateItemSchema),
  itemController.updateItemPriceAndQuantity,
);

module.exports = itemRouter;
