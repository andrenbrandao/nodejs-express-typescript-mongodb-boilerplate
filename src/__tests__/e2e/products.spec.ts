import request from 'supertest';
import app from '../../app';

describe('Products', () => {
  it('should be able to create a new product', async () => {
    const response = await request(app).get('/products');
    expect(response.body).toEqual(['Socks', 'Shirts']);
  });
});
