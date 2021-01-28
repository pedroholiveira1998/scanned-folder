const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload')
const DocumentController = require('./controllers/DocumentController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/store', upload.single('pdf') ,DocumentController.store);
routes.get('/show', DocumentController.index);

module.exports = routes;