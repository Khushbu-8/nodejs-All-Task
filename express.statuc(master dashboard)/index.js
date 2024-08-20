const express = require('express')

const app = express();
const port = 5000;

app.set('view engine','ejs');


app.get('/',(req,res) =>{
    return res.render('index')
})

app.listen(port,(err)=>{
    if(err){
         console.log(err);
         return false;
    }
    console.log(`Server is running on port ${port}`)
})