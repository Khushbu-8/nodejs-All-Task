const express = require('express')

const app = express();
const port = 5000;

app.set('view engine','ejs');

let allTask = [];

app.get('/',(req,res) =>{
    return res.render('Add')
})
app.get('/View',(req,res) =>{
    return res.render('View')
})

app.post("/createTask",(req,res)=>{
    console.log(req.body.task);
 
})

app.listen(port,(err)=>{
    if(err){
         console.log(err);
         return false;
    }
    console.log(`Server is running on port ${port}`)
})