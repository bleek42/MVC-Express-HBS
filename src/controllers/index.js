const { Router } = require('express');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const routes = Router();

routes.use('/', homeRoutes);
routes.use('/api');

module.exports = router;
