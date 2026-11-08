'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.ItemCategory, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.ItemType, {
        foreignKey: 'type_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.Model, {
        foreignKey: 'model_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.Store, {
        foreignKey: 'store_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Item.belongsToMany(models.Order, {
        through: models.ItemOrder,
        foreignKey: 'item_id',
        otherKey: 'order_id',
      });
    }
  }
  Item.init(
    {
      category_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      brand_id: DataTypes.INTEGER,
      model_id: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      store_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
    },
  );
  return Item;
};
