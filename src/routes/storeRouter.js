const { Router } = require('express');
const storeController = require('../controllers/storeController');

const storeRouter = Router();

storeRouter.get('/', storeController.getStores);

module.exports = storeRouter;
