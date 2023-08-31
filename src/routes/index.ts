import { Router } from 'express';
import products from './products';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Hello World!');
});

routes.get('/health', (req, res) => {
  res.send('Health check!');
});

routes.use('/products', products);

export default routes;
