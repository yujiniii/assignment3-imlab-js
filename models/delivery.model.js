const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const Delivery = (sequelize) =>
  sequelize.define(
    "Delivery",
    {
      deliveryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      deliveryPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deliveryState: {
        type: DataTypes.STRING,
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

module.exports = Delivery;
