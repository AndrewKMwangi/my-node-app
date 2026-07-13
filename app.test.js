const request = require('supertest');
const app = require('./app');

describe('Express App Tests', () => {
    
    describe('GET /', () => {
        it('should return 200 and hello message', async () => {
            const res = await request(app).get('/');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('message', 'Hello from Node.js!');
        });
    });

    describe('GET /health', () => {
        it('should return 200 and status OK', async () => {
            const res = await request(app).get('/health');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('status', 'OK');
        });
    });

    describe('GET /nonexistent', () => {
        it('should return 404 for unknown routes', async () => {
            const res = await request(app).get('/api/unknown');
            expect(res.status).toBe(404);
        });
    });
});