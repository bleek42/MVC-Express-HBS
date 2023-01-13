require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.NODE_ENV,
  API_TOKEN: process.env.API_TOKEN || null,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 3306,
  DB_NAME: process.env.DB_NAME || 'mvc_db',
  DB_PASSWORD: process.env.DB_PASSWORD || 'password123',
  DB_USER: process.env.DB_USER || 'root',
};
