const express = require('express');
const {  AddCatagory, insertCategory, deletCatagory, updateCategory, editCatagory, statusChange, ViewCatagory } = require('../controllers/CatagoryController');

const routes = express.Router();

routes.get('/',ViewCatagory)
routes.get('/add',AddCatagory)
routes.post('/insertCategory',insertCategory)
routes.get('/deletCatagory',deletCatagory)
routes.get('/statusChange',statusChange)
routes.get('/editCatagory',editCatagory)
routes.post('/updateCategory',updateCategory)



module.exports = routes;