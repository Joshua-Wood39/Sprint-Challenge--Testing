const db = require('../data/dbConfig.js');
const Games = require('./games-router.js');
const request = require('supertest');
const server = require('../api/server.js');

describe('games router', () => {

    beforeEach(async () => {
        await db('games').truncate();
    })

    describe('GET /games', () => {

        it('should return a status of 200', async () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('should return JSON', () => {
            return request(server)
                .get('/games')
                .expect('Content-Type', /json/);
                
        })
    })

    describe('POST /games', () => {
        let data = {
            "title": '',
            "genre": '',
            "releaseYear": ''
        }

        it('should return 422', async () => {
            await request(server)
                .post('/games')
                .send(data)
                .set('Accept', 'application/json')
                .expect(422)
        })
    })

    describe('POST /games', () => {
        let data = {
            "title": 'Kaboom',
            "genre": 'Console',
            "releaseYear": '1979'
        }

        it('should return 201', async () => {
            await request(server)
                .post('/games')
                .send(data)
                .set('Accept', 'application/json')
                .expect(201)
        })
    })


})