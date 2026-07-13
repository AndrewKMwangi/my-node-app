const request = require('supertest');
const app = require('./app');

describe('Express App Tests', () => {
    test('GET / returns hello message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Hello from Node.js!');
    });

    test('GET /health returns status OK', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });
});