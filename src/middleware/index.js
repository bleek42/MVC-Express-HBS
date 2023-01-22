const validateBasicAuth = require('./auth.middleware');
const eventLogger = require('./logger.middleware');
const serverErrorHandler = require('./server-error.middleware');

module.exports = { validateBasicAuth, eventLogger, serverErrorHandler };
