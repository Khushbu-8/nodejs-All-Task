const express = require('express');
const app = express();

const port = 8000;


let Data = [];

app.use(express.urlencoded());


app.set('view engine','ejs');


app.get('/',(req,res) =>{
    return res.render('table',{
        User : Data
    })
})

app.get('/add',(req,res) =>{
    return res.render('form')
})

app.post('/insertRecord',(req,res) =>{
//    console.log(req.body);
    const {username , userphone} = req.body
    let obj = {
        id : Date.now(),
        name : username,
        phone : userphone
    }
    Data.push(obj)
    return res.redirect('/')
})

app.get('/DeletRecord',(req,res) =>{
    let id = req.query.id;
    // console.log(id);
    const deletDataa = Data.filter(val => val.id != id)
    Data = deletDataa;
    return res.redirect('/')
}) 
app.get('/EditRecord',(req ,res) =>{
    let editid = req.query.id
    // console.log(editid);
    let editData = Data.find(val => val.id == editid)
        return res.render('Edit',{
        editData
    })
})
app.post('/UpdateRecord',(req,res) =>{
    let eid = req.body.id;
    console.log(eid);
    let name = req.body.username
    let phone = req.body.userphone
   let r = Data.map((val) =>{
    if(val.id == eid){
        val.name = name,
        val.phone = phone 
    }
        return val;
   })
  
 console.log(r);

   console.log("Update Successfully...");
   return res.redirect('/')

})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server start = ${port}`);
})