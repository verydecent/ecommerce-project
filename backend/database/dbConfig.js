const environment = process.env.ENVIRONMENT || 'development';
const configuration = require('../knexfile')[environment];
module.exports = require('knex')(configuration);