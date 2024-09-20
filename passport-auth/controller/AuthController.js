
const UserModel = require('../model/userModel')
const loginPage = (req,res) =>{
    if (res.locals.users) {
       return res.redirect('/dash')
    }
   return res.render('login')

}
const RegisterPage = (req,res) =>{
    return res.render('register')
} 

const registerUser = async(req,res) =>{
try {
    const {name,email,password} = req.body
    // console.log(req.body);
    await UserModel.create({
        name:name,
        email:email,
        password:password
    })
    console.log("Register Successfilly...");
    
    return res.redirect('/')
    
    
} catch (error) {
    console.log(error);
    return false;

    
}

}

const loginUser = (req,res) =>{
   console.log("login successfully");
   
        return res.redirect('/dash')
   
 
}
const dashboardPage = (req,res) =>{
    return res.render('dashboard')
}
const logout = async(req,res) =>{
    req.logout((err) =>{
        if(err){
            console.log(err);
            return false            
        }
        return res.redirect('/')

    })
}
module.exports = {loginPage,RegisterPage,registerUser,loginUser,dashboardPage,logout}