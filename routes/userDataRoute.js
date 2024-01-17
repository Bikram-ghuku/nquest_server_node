const express = require('express');

const userDataRoute = express.Router();

const userData = require('../controllers/userDetails');

userDataRoute.get('/userData', userData);

module.exports = userDataRoute;