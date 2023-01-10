const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("../controllers");
const helpers = require("./utils/helpers");
const sequelize = require("../config/connection");
const { NODE_ENV, PORT } = require("../config/env");

console.log(`NodeJS env is ${NODE_ENV}`);

const app = express();

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`ExpressJS Server listening @ http://localhost:${PORT}`)
  );
});
