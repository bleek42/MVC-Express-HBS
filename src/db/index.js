const Sequelize = require("sequelize");

const connOpts = {};

const connection = new Sequelize();

sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD
);
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );\

module.exports = sequelize;
