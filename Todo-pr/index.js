const express = require('express')

const app = express();
const port = 5000;

app.set('view engine','ejs');

const checkAge =(req,res,next) =>{
    let age = req.query.age
    if(!age || age < 18){
        return res.redirect('/')
    }
    return next();
}



app.get('/',(req,res) =>{
    return res.render('index')
})
app.get('/dash',checkAge,(req,res) =>{
    return res.render('dashboard')
})
app.get('/pro',(req,res) =>{
    return res.render('product')
})

app.listen(port,(err)=>{
    if(err){
         console.log(err);
         return false;
    }
    console.log(`Server is running on port ${port}`)
})