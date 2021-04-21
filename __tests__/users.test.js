'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('USER ROUTES', () => {

    it('should create a new item in the db', async () => {
        const response = await mockRequest.post('/users').send({ name: 'jarrell' })
        expect(response.status).toBe(201);
        expect(typeof response).toBe('object');
        expect(response.body.record.name).toEqual('jarrell');
    });

    it('should retrieve an item from the db', async () => {
        const response = await mockRequest.get('/users/1');
        expect(response.status).toBe(200);
        expect(typeof response).toBe('object');
    });

    it('should retrieve all items from the db', async () => {
        const response = await mockRequest.get('/users');
        expect(response.status).toBe(200);
        expect(typeof response).toBe('object');
    });

    it('should update an item in the db', async () => {
        const response = await mockRequest.put('/users/1');
        expect(response.status).toBe(200);
    })

    it('should delete an item in the db', async () => {
        const response = await mockRequest.delete('/users/1');
        expect(response.status).toBe(200);
    })

})