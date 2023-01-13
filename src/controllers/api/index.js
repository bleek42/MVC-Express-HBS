const { Router } = require('express');

const userRouter = require('./userRouter');

const apiRoutes = Router();

apiRoutes.use('/users', userRouter);

module.exports = apiRoutes;
