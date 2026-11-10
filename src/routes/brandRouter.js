const { Router } = require('express');
const brandController = require('../controllers/brand');
const { brandTitlesSchema } = require('../utils/validationSchemas');
const { validate } = require('../middlewares/validate.mw');

const brandRouter = Router();

brandRouter.get('/', brandController.getAllBrands);

brandRouter.post(
  '/by-titles',
  validate(brandTitlesSchema),
  brandController.getBrandsByTitles,
);

brandRouter.delete(
  '/',
  validate(brandTitlesSchema),
  brandController.deleteBrandsByTitles,
);

module.exports = brandRouter;
