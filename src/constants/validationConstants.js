const yup = require('yup');

const ID = yup.number().integer().positive().required();
const TITLE = yup.string().trim().required();
const DESCRIPTION = yup.string().trim().nullable();

module.exports = {
  ID,
  TITLE,
  DESCRIPTION,
};
