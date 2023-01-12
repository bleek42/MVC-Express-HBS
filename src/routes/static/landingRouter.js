const { Router } = require('express');

staticRouter.route('/', async (req, res, next) => {
  try {
    await res.render('<p> landing page </p>');
  } catch (err) {
    console.error(err);
    next(err);
  }
});
