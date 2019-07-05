// Dependencies
const express = require('express');
const server = express();

// Middleware
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

server.use(logger('dev'));
server.use(cors());
server.use(helmet());
server.use(express.json());

// Sanity check
server.get('/', (req, res) => {
  res.send('Server is live');
});

// Routes
const authRoutes = require('../routes/authRoutes');
const usersRoutes = require('../routes/usersRoutes');

// Endpoints
server.use('/api/auth', authRoutes);
server.use('/api/users', usersRoutes);

module.exports = server;