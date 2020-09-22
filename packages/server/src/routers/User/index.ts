import express, { Request, Response } from 'express';
import { UserModel } from '@mern/shared';

const router = express.Router();

// create / sign up
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

// get everyone
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      throw new Error('Users not found');
    }
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(404).send();
  }
});

export default router;
