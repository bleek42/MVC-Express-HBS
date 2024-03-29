const fs = require('fs/promises');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

const {
  NODE_ENV,
  PG_HOST,
  PG_PORT,
  PG_NAME,
  PG_USER,
  PG_PASSWORD,
} = require('../../config');
const initDb = require('../initDb');

async function bootstrapModels() {
  const basename = path.basename(__filename);

  try {
    const db = await initDb();

    const models = await fs.readdir(__dirname).filter((file) => {
      console.log('files:', file);
      return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    });

    for await (const [key, value] of Object.entries(models)) {
      console.log(db);
      console.table({ key, value });
    }
    // .forEach((file) => {
    //   const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    //   db[model.name] = model;
    // });

    // Object.keys(db).forEach((modelName) => {
    //   if (db[modelName].associate) {
    //     db[modelName].associate(db);
    //   }
    // });
    return { db, Sequelize };
  } catch (err) {
    console.error(err);
    throw err;
  }

}

module.exports = bootstrapModels;
