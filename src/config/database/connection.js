const knex = require('knex');
const configuration = require('../../../knexfile.js');

const connection = knex(configuration);

module.exports = connection;