const { Router } = require('express');

const landingRouter = require('./landingRouter');

const staticRoutes = Router();

staticRoutes.use('/', landingRouter);

module.exports = staticRoutes;
