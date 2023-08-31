/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type Response, type Request } from 'express';

class ProductController {
  static list(req: Request, res: Response): Response {
    return res.send(['Socks', 'Shirts']);
  }

  static create(req: Request, res: Response): Response {
    return res.send('Product created!');
  }
}

export default ProductController;
