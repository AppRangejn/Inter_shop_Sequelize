const { Router } = require('express');
const itemCategoryController = require('../controllers/itemCategoryController')

const itemCategoryRouter = Router();

itemCategoryRouter.get('/', itemCategoryController.getItemCategories);

module.exports = itemCategoryRouter;
