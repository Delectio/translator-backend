import { Router } from 'express';
import { inputValidator } from '../../middlewares/translator';
import translatorController from '../../controllers/v1/translator';

const apiRouter = Router();

apiRouter.get('/translate', inputValidator, translatorController);

export default apiRouter;
