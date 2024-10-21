const express = require('express')

const routes = express.Router();

routes.use('/',require('./authRoute'))
routes.use('/category',require('./'))


module.exports = routes;