/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type Response, type Request } from 'express';
import UserRepository from '../infra/repositories/user-repository';
import User from '../domain/user';

class UserController {
  static async create(req: Request, res: Response): Promise<void> {
    const { body } = req;
    const user = new User(body);
    const userRepository = new UserRepository();
    const id = await userRepository.create(user);
    res.status(201).json({ id });
  }
}

export default UserController;
