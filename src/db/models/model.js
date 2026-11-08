'use strict';
const { Model: SequelizeModel } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends SequelizeModel {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Model.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      brand_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Model',
    },
  );
  return Model;
};
