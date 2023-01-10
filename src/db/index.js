const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD } = require("../config");

const db = new Sequelize({});

module.exports = db;
