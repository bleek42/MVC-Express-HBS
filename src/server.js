const path = require('path');
const express = require('express');
const { create } = require('express-handlebars');
const morgan = require('morgan');
const helmet = require('helmet');

const { NODE_ENV, PORT } = require('./config');
const { validateBasicAuth, eventLogger, serverErrorHandler } = require('./middleware');
const routes = require('./controllers');
const sequelize = require('./db');
const sequelize = require('./db');

// ! change to use a winston logging middleware
console.log(`NodeJS env is ${NODE_ENV}`);

const app = express();
const { engine } = create(); // ? I like object destructuring..

app.engine('handlebars', engine);
app.set('view engine', 'handlebars');

app.use(helmet()); // ? middleware that sets common security headers for app, prevent things like XSS, SQL inj (extensive enough anyway)
app.use(morgan(NODE_ENV === 'production' ? 'tiny' : 'common')); // ? HTTP request logger middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views', 'scripts')));

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
