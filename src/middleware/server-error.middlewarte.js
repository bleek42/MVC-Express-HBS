const { NODE_ENV } = require('../config');

function serverErrorHandler(err, req, res, next) {
  const errRes = {
    message: 'Internal Server Error',
    timestamp: new Date().toLocaleString(),
  };
  if (NODE_ENV === 'development') {
    Object.assign(errRes, { error: err });
  }
  if (NODE_ENV === 'production') {
    Object.assign(errRes, { error: err?.message });
  }

  res.status(500).json(errRes);
}

module.exports = serverErrorHandler;
