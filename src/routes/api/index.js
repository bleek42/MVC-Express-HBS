const { Router } = require('express');

const userRouter = require('./userRouter');

const apiRoutes = Router();

apiRoutes.use(userRouter);

apiRoutes.use('/api');

module.exports = apiRoutes;
