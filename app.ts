import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import UserRouter from './src/routers/user';

// create server
const app = express();

// set client directory
var CLIENT_DIR = 'client/build';

if (path.basename(__dirname) === 'build') {
    CLIENT_DIR = '../' + CLIENT_DIR;
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, CLIENT_DIR)));
app.use(cors());
app.use(express.json());

app.use(UserRouter);

// The "catchall" handler: for a request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, CLIENT_DIR, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log(`Server listening on ${PORT}`);