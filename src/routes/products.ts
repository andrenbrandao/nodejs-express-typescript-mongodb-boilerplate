import { Router } from 'express';
import ProductController from '../controllers/product-controller';

const routes = Router();

routes.get('/', ProductController.list);
routes.post('/', ProductController.create);

export default routes;
