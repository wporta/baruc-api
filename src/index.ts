import express, { Request, Response } from 'express';

import router from './routes';

const app = express();

app.use(express.json());
app.use('/api', router);

app.get('/', (_, res: Response) => {
  res.status(200).end('Home Page');
});

app.get('/healthcheck', (_, res: Response) => {
  res.status(200).end('Server is up and running');
});

app.use((_, res: Response) => {
  res.status(404).end('404: Resource Not Found');
});

app.listen(5000, () => {
  console.log('Server is up and running');
});
