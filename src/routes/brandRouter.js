const { Router } = require('express');
const brandController = require('../controllers/brand');

const brandRouter = Router();

brandRouter.get('/', brandController.getAllBrands);

brandRouter.post('/by-titles', brandController.getBrandsByTitles);

brandRouter.delete('/', brandController.deleteBrandsByTitles);

module.exports = brandRouter;
