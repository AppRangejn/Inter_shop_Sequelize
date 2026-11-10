const { Router } = require('express');
const modelController = require('../controllers/modelController');

const modelRouter = Router();

modelRouter.get('/', modelController.getModels);

module.exports = modelRouter;
