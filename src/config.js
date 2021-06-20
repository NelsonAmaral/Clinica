const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    db_host:process.env.DB_HOST,
    db_user:process.env.DB_USER,
    db_password:process.env.DB_PASSWORD,
    db_database:process.env.DB_DATABASE,
    app_port:process.env.APP_PORT,
};