const express = require('express');

const routes = express.Router();

routes.get('/', UsersController.index);

module.exports = routes;