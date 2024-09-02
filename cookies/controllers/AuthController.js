const { log } = require('console');
const UserModel = require('../models/authModel')

const LoginPage = (req,res) =>{

  return  res.render('login');
}

const RegisterPage = (req,res) =>{
    return res.render('register')
}

const registerUser = async(req,res) =>{
    const {name,email,password} = req.body;
    // console.log(req.body);
    UserModel.create({
        name:name,
        email:email,
        password:password
    });
    console.log("User Registered");
    
    return res.redirect('/');


    

}

module.exports = {
    LoginPage,RegisterPage, registerUser
}