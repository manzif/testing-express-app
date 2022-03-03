import app from '../app.js';
import supertest from 'supertest';

const requestWithSupertest = supertest(app);

describe('Bus Endpoint', () => {
    it('GET /bus should show all buses', async () => {
      const res = await requestWithSupertest.get('/api/bus/bus');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('bus')
    });
  
});