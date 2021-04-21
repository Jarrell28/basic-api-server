'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('USER ROUTES', () => {

    it('should create a new item in the db', async () => {
        const response = await mockRequest.post('/products').send({ product: 'Shirt', description: 'White T Shirt' })
        expect(response.status).toBe(201);
        expect(typeof response).toBe('object');
        expect(response.body.record.product).toEqual('Shirt');
        expect(response.body.record.description).toEqual('White T Shirt');
    });

    it('should retrieve an item from the db', async () => {
        const response = await mockRequest.get('/products/1');
        expect(response.status).toBe(200);
        expect(typeof response).toBe('object');
    });

    it('should retrieve all items from the db', async () => {
        const response = await mockRequest.get('/products');
        expect(response.status).toBe(200);
        expect(typeof response).toBe('object');
    });

    it('should update an item in the db', async () => {
        const response = await mockRequest.put('/products/1');
        expect(response.status).toBe(200);
    })

    it('should delete an item in the db', async () => {
        const response = await mockRequest.delete('/products/1');
        expect(response.status).toBe(200);
    })

})