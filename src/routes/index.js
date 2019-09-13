import { Router } from 'express';

const apiRouter = Router();

apiRouter.use('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to Translator API',
  });
});

export default apiRouter;
