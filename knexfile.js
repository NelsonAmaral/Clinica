const { db_host, db_database, db_password, db_user, db_port } = require('./src/config/env');

  const development = {
    client: 'pg',
    connection: {
      host: db_host,
      user: db_user,
      port: db_port,
      password: db_password,
      database: db_database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      tableName:'knex_migrations',
      directory: `${__dirname}/src/config/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/config/database/seeds`
    }
  }

  module.exports = development;
