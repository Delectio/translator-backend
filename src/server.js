import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use('/', apiRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));

export default app;
