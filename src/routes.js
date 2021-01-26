const express = require('express');
const DocumentController = require('./controllers/DocumentController');


const routes = new express.Router();

routes.post('/store', DocumentController.store);
routes.get('/show', DocumentController.index);

module.exports = routes;