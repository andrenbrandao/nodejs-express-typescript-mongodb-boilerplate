import { Router } from 'express';
import users from './users.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Hello World!');
});

routes.get('/health', (req, res) => {
  res.send('Health check!');
});

routes.use('/users', users);

export default routes;
