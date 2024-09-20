const express = require('express');
const { loginPage, RegisterPage, registerUser, loginUser, dashboardPage, logout } = require('../controller/AuthController');
const passport = require('passport');
const routes = express.Router();


routes.get('/',loginPage)
routes.get('/register',RegisterPage);
routes.post('/registerUser',registerUser)
routes.post('/loginUser' ,passport.authenticate('local', { failureRedirect: '/' }),loginUser)
routes.get('/dash', passport.checkUser,dashboardPage)
routes.get('/logout',logout)
module.exports = routes