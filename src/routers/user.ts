import express, { Request, Response } from 'express';
import { UserModel } from "../models/user";
import '../db/mongoose';

const router = express.Router();

// create / sign up
router.post('/api/users', async (req: Request, res: Response) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

// get everyone
router.get('/api/users', async (req: Request, res: Response) => {
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