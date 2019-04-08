const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/index.js');

const dbURI = 'mongodb://localhost/airbnb';

describe('request response cycle', () => {
  beforeEach(() => mongoose.connect(dbURI));
  afterEach(() => mongoose.disconnect());

  test('GET /api/listing/:id headers', (done) => {
    const roomNum = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/api/listing/${roomNum}`)
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        done();
      });
  });

  test('GET /api/listing/:id body', (done) => {
    const roomNum = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/api/listing/${roomNum}`)
      .then((response) => {
        expect(response.body).toHaveProperty('roomNum');
        expect(response.body).toHaveProperty('highlight');
        expect(response.body).toHaveProperty('Amenities');
        expect(response.body).toHaveProperty('title');
        done();
      });
  });
});