const express = require('express');

const resColRoute = express.Router();

const userData = require('../controllers/responseCollector');

resColRoute.post('/userData', userData)

module.exports = resColRoute