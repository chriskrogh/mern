import type { Request, Response } from 'express';

import express from 'express';
import cors from 'cors';
import path from 'path';
import connect from './config/db';
import routers from './routers';
import 'dotenv/config';

const main = async (): Promise<void> => {
  const app = express();

  app.use(express.json());

  // allow cross origin reqs from client in development
  if (process.env.NODE_ENV !== 'production') {
    app.use(
      cors({
        origin: /http:\/\/localhost:(3000|6006)/,
      }),
    );
  }

  app.use('/api', routers);

  console.log('Connecting to Mongo DB');
  await connect(() => console.log('Connected!'));

  // set client directory
  const CLIENT_DIR = path.join(__dirname, '..', '..', 'client', 'build');

  // Serve static files from the React app
  app.use(express.static(CLIENT_DIR));
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(CLIENT_DIR, 'index.html'));
  });

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Running server http://localhost:${PORT}`);
  });
};

main();
