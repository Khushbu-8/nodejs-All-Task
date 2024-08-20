const express = require('express')
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded())


// coonect MongoDB
const connectDB = require('./config/db')
connectDB();

// connect user model / collection
const UseModel = require('./models/UserModel');

app.get('/', (req,res) =>{
       return res.render ('Add') 
})
app.get('/View', (req,res) =>{
       return res.render ('View') 
})

app.post('/insertUser',(req,res) =>{
    // console.log(req.body);
    
    const {name, email} = req.body;
    const user = new UseModel({name, email})
    user.save()
    .then(() =>{
        console.log("Added...");
        
        res.redirect('/')

    })
    .catch((err) =>{
        console.log(err);
        return false;
    })


})



app.listen(port,(err) =>{
    if(err) console.log(err);
    console.log(`Server is running on port ${port}`)
})
