const express = require('express');
const { loginPage, RegisterPage, registerUser } = require('../controller/AuthController');
const routes = express.Router();


routes.get('/',loginPage)
routes.get('/register',RegisterPage);
routes.post('/registerUser',registerUser)
module.exports = routes