require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 9000,
  API_TOKEN: process.env.API_TOKEN || 'hekujtfhwf8-edgwsertgw-sefafgas',
  PG_HOST: process.env.PG_HOST || 'localhost',
  PG_PORT: process.env.PG_PORT || 5432,
  PG_NAME: process.env.PG_NAME || 'mvcblog_db',
  PG_PASSWORD: process.env.PG_PASSWORD || 'password123',
  PG_USER: process.env.PG_USER || 'root',
};
