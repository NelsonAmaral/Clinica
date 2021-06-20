const { db_host, db_database, db_password, db_user } = require('./src/config');

  const development = {
    client: 'pg',
    connection: {
      host: db_host,
      user: db_user,
      password: db_password,
      database: db_database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      tableName:'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

  module.exports = development;
