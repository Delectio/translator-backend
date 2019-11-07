import { Router } from 'express';
import v1Router from './v1';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to Translator API',
  });
});

apiRouter.use('/v1', v1Router);

apiRouter.use('*', (req, res) => {
  res.status(404).send({
    status: 404,
    message: 'This route does not exist',
  });
});

export default apiRouter;
