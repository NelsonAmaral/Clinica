const express = require('express');

const ContributorController = require('./controllers/ContributorController');

const routes = express.Router();

routes.post('/create', ContributorController.create);
routes.get('/list', ContributorController.list);
routes.get('/search/:contributor_id', ContributorController.listone);
routes.put('/update', ContributorController.update);
routes.delete('/delete/:contributor_id', ContributorController.delete);


module.exports = routes;