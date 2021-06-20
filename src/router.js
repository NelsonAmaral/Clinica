const express = require('express');

const ContributorController = require('./controllers/ContributorController');

const routes = express.Router();

routes.post('/create', ContributorController.create);

module.exports = routes;