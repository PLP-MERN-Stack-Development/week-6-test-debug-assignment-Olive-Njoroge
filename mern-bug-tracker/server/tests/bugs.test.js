const request = require('supertest');
const app = require('../index');

describe('GET /api/bugs', () => {
  it('should return a list of bugs', async () => {
    await request(app).post('/api/bugs').send({
      title: 'Sample bug',
      description: 'Just testing'
    });

    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'Sample bug' })
      ])
    );
  });
});
