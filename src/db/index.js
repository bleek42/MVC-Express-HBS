const Sequelize = require('sequelize');
const {
  NODE_ENV,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = require('../config');

const connOpts = {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
};

const sequelize = new Sequelize(connOpts);
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );\

module.exports = sequelize;
