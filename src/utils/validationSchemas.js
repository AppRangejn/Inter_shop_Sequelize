const yup = require('yup');
const { ID, TITLE, DESCRIPTION } = require('../constants/validationConstants');

const customerSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  password: yup.string().required(),
});

const orderSchema = yup.object().shape({
  code: yup.string().trim().required(),
  date: yup.date().default(() => new Date()),
  customer: ID,
  amount: yup.number().positive().required(),
  paid: yup.boolean().default(false),
});

const itemSchema = yup.object().shape({
  category_id: ID,
  type_id: ID,
  brand_id: ID,
  model_id: ID,
  store_id: ID,
  price: yup.number().positive().required(),
  quantity: yup.number().integer().min(0).default(0),
});

const brandSchema = yup.object().shape({
  title: TITLE,
  description: DESCRIPTION,
});

const modelSchema = yup.object().shape({
  title: TITLE,
  description: DESCRIPTION,
  brand_id: ID,
});

const itemCategorySchema = yup.object().shape({
  title: TITLE,
  description: DESCRIPTION,
});

const itemTypeSchema = yup.object().shape({
  title: TITLE,
  description: DESCRIPTION,
});

const storeSchema = yup.object().shape({
  title: TITLE,
  description: DESCRIPTION,
});

const itemOrderSchema = yup.object().shape({
  item_id: ID,
  order_id: ID,
});

const brandTitlesSchema = yup.object().shape({
  titles: yup.array().of(TITLE).min(1).required(),
});

const updateItemSchema = yup.object().shape({
  price: yup.number().positive(),
  quantity: yup.number().integer().min(0),
});

module.exports = {
  customerSchema,
  orderSchema,
  itemSchema,
  brandSchema,
  modelSchema,
  itemCategorySchema,
  itemTypeSchema,
  storeSchema,
  itemOrderSchema,
  brandTitlesSchema,
  updateItemSchema,
};
