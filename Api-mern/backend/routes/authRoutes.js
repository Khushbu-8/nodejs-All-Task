const express = require('express');
const { addUser, viewUser, deleteUser, updateUser, singleUser } = require('../controllers/AuthController');

const routes = express.Router();

routes.post('/addUser',addUser);
routes.get('/viewUser',viewUser);
routes.delete('/deleteUser',deleteUser)
routes.put('/updateUser',updateUser)
routes.get('singleUser',singleUser)

module.exports = routes


