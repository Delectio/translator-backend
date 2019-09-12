import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'Welcome to Translator API',
  });
});

export default apiRouter;
