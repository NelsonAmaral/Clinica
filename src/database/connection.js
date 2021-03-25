const knex = require('knex');
require('dotenv').config();
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;