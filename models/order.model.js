const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const Order = (sequelize) =>
  sequelize.define(
    "Order",
    {
      orderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
      timestamps: true,
      paranoid: true, // 논리삭제
      underscored: true,
    }
  );

module.exports = Order;
