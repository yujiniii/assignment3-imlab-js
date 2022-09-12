const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Country = require("./country.model")(sequelize);
const Coupon = require("./coupon.model")(sequelize);
const Order = require("./order.model")(sequelize);
const Delivery = require("./delivery.model")(sequelize);

// Order : Delivery ==> 1:1
Order.hasOne(Delivery, { foreignKey: "deliveryId" });
Delivery.belongsTo(Order, { foreignKey: "deliveryId" });

// Order : Country ==> 1:1
Order.hasOne(Country, { foreignKey: "countryId" });
Country.belongsTo(Order, { foreignKey: "countryId" });

const db = {};
db.sequelize = sequelize;

db.Country = Country;
db.Coupon = Coupon;
db.Order = Order;
db.Delivery = Delivery;

module.exports = db;
