const { Router } = require('express');

const blogRouter = Router();

blogRouter.post('/:id/:author/topic', async (req, res, next) => {
  console.info('ping POST /api/blog/');
  console.table(req.headers);
  console.table(req.body);
  console.log(req.params);
  console.log(req.query);
  try {
    res.status(200).send('testing POST /api/blog/:id/:author');
  } catch (err) {
    console.error(err); // TODO: replace with winston logger
    next(err);
  }
});

module.exports = blogRouter;
