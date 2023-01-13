const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./db');
const { NODE_ENV, PORT } = require('./config');
const sequelize = require('./db');

console.log(`NodeJS env is ${NODE_ENV}`);

const app = express();

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use(validator);

app.use(routes);

sequelize
  .authenticate()
  .then(() =>
    sequelize
      .sync({ force: true })
      .then(() =>
        app.listen(PORT, () =>
          console.log(`ExpressJS Server listening @ http://localhost:${PORT}`)
        )
      )
  )
  .catch((err) => console.error(err));
