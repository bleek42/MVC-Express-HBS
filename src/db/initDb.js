const Sequelize = require('sequelize');
const {
  NODE_ENV,
  PG_NAME,
  PG_USER,
  PG_PASSWORD,
  PG_HOST,
  PG_PORT,
  PG_NAME,
} = require('../config');

async function initDb() {
  const opts = {
    dialect: 'postgres',
    host: PG_HOST,
    port: PG_PORT || 8432,
    database: PG_NAME,
    username: PG_USER,
    password: PG_PASSWORD,
    ssl: false,
    dialectOptions: {},
  };

  if (NODE_ENV !== 'production') {
    opts.ssl = true;
    opts.dialectOptions.ssl = true;
  }
  const sequelize = new Sequelize(opts);

  try {
    const auth = await sequelize.authenticate();
    console.log(auth);
    return auth ?? { ...sequelize };
  } catch (err) {
    console.log('error', { ...err });
    throw Error('error:', { ...err });
  }
}

module.exports = initDb;
