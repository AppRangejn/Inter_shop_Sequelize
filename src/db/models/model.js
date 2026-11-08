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
      Model.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Model.hasMany(models.Item, {
        foreignKey: 'model_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
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
      tableName: 'Models',
    },
  );
  return Model;
};
