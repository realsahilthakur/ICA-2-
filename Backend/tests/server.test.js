const { expect } = require('chai');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server.js');

describe('Todo API', () => {
  before(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it('should return a list of todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should create a todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ text: 'Test Todo' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('text', 'Test Todo');
    expect(res.body).to.have.property('completed', false);
  });
});