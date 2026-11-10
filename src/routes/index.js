const { Router } = require('express');
const brandRouter = require('./brandRouter');
const itemRouter = require('./itemRouter');
const customerRouter = require('./customerRouter');
const orderRouter = require('./orderRouter');
const storeRouter = require('./storeRouter');
const modelRouter = require('./modelRouter');
const itemTypeRouter = require('./itemTypeRouter');
const itemOrderRouter = require('./itemOrderRouter');
const itemCategoryRouter = require('./itemCategoryRouter');

const router = Router();

router.use('/brands', brandRouter);
router.use('/items', itemRouter);
router.use('/customers', customerRouter);
router.use('/orders', orderRouter);
router.use('/stores', storeRouter);
router.use('/models', modelRouter);
router.use('/item-types', itemTypeRouter);
router.use('/item-orders', itemOrderRouter);
router.use('/item-categories', itemCategoryRouter);

module.exports = router;
