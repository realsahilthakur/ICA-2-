const { expect } = require('chai');
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../server.js');

let server;
let mongoServer;

before(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.TEST_MONGO_URI = mongoServer.getUri();
  await mongoose.connect(process.env.TEST_MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  server = app.listen(3000, () => console.log('Server running on port 3000'));
});

after(async () => {
  await server.close(); // Close the server
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('Todo API', () => {
  it('should return a list of todos', async () => {
    const res = await request(server).get('/api/todos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should create a todo', async () => {
    const res = await request(server)
      .post('/api/todos')
      .send({ text: 'Test Todo' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('text', 'Test Todo');
    expect(res.body).to.have.property('completed', false);
  });
});