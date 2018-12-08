var express = require('express');
var api = express.Router();
var Router = require('./routes');


api.use('/create',Router.StudentRouter);

module.exports = api;