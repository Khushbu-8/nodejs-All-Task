const express = require('express');
const { LoginPage, RegisterPage, registerUser } = require('../controllers/AuthController');

const routes = express.Router();

// const crudController = require('../controllers/CrudController')

routes.get('/',LoginPage);
routes.get('/register',RegisterPage)
routes.post('/registerUser',registerUser);
// routes.get('/view',crudController.ViewUser);
// routes.get('/deleteRecord',crudController.deleteRecord)
// routes.get('/editRecord',crudController.editRecord);
// routes.post('/updateRecord',crudController.updateRecord)

module.exports = routes


