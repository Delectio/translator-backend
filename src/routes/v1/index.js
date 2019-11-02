import { Router } from 'express';
import translatorController from '../../controllers/v1/translator';

const apiRouter = Router();

apiRouter.post('/translate', translatorController);

export default apiRouter;
