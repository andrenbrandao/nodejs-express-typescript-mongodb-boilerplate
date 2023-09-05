import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import UserController from '../controllers/user-controller';

const routes = Router();

routes.post('/', asyncHandler(UserController.create));

export default routes;
