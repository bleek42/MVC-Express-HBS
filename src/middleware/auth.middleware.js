const { API_TOKEN } = require('../config');

// function validateAuthHeader(err, req, res, next) {
//   const authKey = req.headers['Authorization'] || '';
//   if (!authKey.toLowerCase().startsWith('Bearer')) {
//     res.status(401).json({ message: 'Unauthorized Request' });
//   }

//   if (authKey.split('-').join('').toLowerCase() !== API_TOKEN.toLowerCase()) {
//     res.status(401).json({ message: 'Unauthorized Request' });
//   }
// }

async function validateBasicAuth(err, req, res, next) {
  console.info(
    'request/response passing thru validAuthHeader middleware: see the log below for all properties on your "req.headers"'
  );
  console.table(req.headers);
  const authKey = req.headers['Authorization'] || undefined;
  if (
    !req.headers['Authorization'] ||
    !req.headers['Authorization'].toLowerCase().startsWith('bearer')
  ) {
    console.error(err);
    res.status(401).send('Unauthorized Request');
  }

  const normalizedAuthKey = req.headers['Authorization'].split('-').join('');
  if (normalizedAuthKey.toLowerCase() !== API_TOKEN.toLowerCase()) {
    console.error(err);
    res.status(401).send('Unauthorized Request: invalid authorization header.');
  }

  next(err);
}

module.exports = {
  validateBasicAuth,
};
