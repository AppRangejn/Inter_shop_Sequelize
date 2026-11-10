const { Router } = require('express');
const itemTypeController = require('../controllers/itemType')

const itemTypeRouter = Router();

itemTypeRouter.get('/', itemTypeController.getItemTypes);

module.exports = itemTypeRouter;
