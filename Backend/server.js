const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection (use memory server or env variable)
if (process.env.NODE_ENV === 'test' && process.env.TEST_MONGO_URI) {
  mongoose.connect(process.env.TEST_MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

// Example routes
app.get('/api/todos', (req, res) => {
  res.json([]);
});

app.post('/api/todos', (req, res) => {
  res.status(201).json({ text: req.body.text, completed: false });
});

module.exports = app; // Export app for testing