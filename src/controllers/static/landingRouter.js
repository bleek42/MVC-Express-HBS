const { Router } = require('express');

staticRouter.route('/', (req, res, next) => {
  try {
    res.render('<p> landing page </p>');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

staticRouter.route();
