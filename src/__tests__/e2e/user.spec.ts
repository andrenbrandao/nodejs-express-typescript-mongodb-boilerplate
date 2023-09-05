import request from 'supertest';
import app from '../../app';

describe('Users', () => {
  it('should be able to create an user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'John',
        dob: '2023-10-09',
        address: '123 street',
        description: 'Software Engineer',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({ id: expect.anything() });
  });
});
