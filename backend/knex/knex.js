const environment = process.env.ENVIRONMENT || 'development';
const configuration = require('../knexfile')[development];
module.exports = require('knex')(configuration);