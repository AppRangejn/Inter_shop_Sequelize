const { Router } = require('express');
const modelController = require('../controllers/model');

const modelRouter = Router();

modelRouter.get('/', modelController.getModels);

module.exports = modelRouter;
