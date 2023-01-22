const { Router } = require('express');

const blogRouter = require('./blogRouter');
const userRouter = require('./userRouter');

const apiRoutes = Router();

apiRoutes.use('/users', userRouter);
apiRoutes.use('/blogs', blogRouter);

module.exports = apiRoutes;
