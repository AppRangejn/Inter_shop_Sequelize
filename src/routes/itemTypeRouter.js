const { Router } = require('express');
const itemTypeController = require('../controllers/itemTypeController')

const itemTypeRouter = Router();

itemTypeRouter.get('/', itemTypeController.getItemTypes);

module.exports = itemTypeRouter;
