const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const Coupon = (sequelize) =>
  sequelize.define(
    "Coupon",
    {
      couponId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      couponCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      range: {
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

module.exports = Coupon;
