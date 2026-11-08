'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, {
        foreignKey: 'customer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Order.belongsToMany(models.Item, {
        through: models.ItemOrder,
        foreignKey: 'order_id',
        otherKey: 'item_id',
      });

      Order.hasOne(models.ItemOrder, {
        foreignKey: 'order_id',
      });
    }
  }
  Order.init(
    {
      code: DataTypes.STRING,
      date: DataTypes.DATE,
      customer: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      paid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
