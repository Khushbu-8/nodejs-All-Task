
const loginPage = (req,res) =>{
   return res.render('login')

}
const RegisterPage = (req,res) =>{
    return res.render('register')
} 

const registerUser = async(req,res) =>{
try {
    const {name,email,password} = req.body
    console.log(req.body);
    
    
} catch (error) {
    console.log(error);
    return false;

    
}

}

module.exports = {loginPage,RegisterPage,registerUser}