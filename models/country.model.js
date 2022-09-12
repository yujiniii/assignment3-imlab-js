const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const Country = (sequelize) =>
  sequelize.define(
    "Country",
    {
      countryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      countyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      countyName: {
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

module.exports = Country;
