const { Router } = require('express');
const storeController = require('../controllers/store');

const storeRouter = Router();

storeRouter.get('/', storeController.getStores);

module.exports = storeRouter;
