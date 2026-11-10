const { Router } = require('express');
const itemCategoryController = require('../controllers/itemCategory')

const itemCategoryRouter = Router();

itemCategoryRouter.get('/', itemCategoryController.getItemCategories);

module.exports = itemCategoryRouter;
