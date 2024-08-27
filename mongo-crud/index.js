const express = require('express')
const app = express();
const port = 3000;


// connenct MongoDB
const connectDB = require('./config/db');
connectDB();

// connect user model / collection
const UserModel = require(`./models/UserModel`);

const fs = require('fs');


app.set('view engine', 'ejs')
app.use(express.urlencoded())


// image path

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const multer = require('multer');

const { unlinkSync } = require('fs');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now();
        cb(null,file.fieldname+'-'+uniqname)
    }
})

const uploadFile = multer({ storage: st }).single('image');


app.get('/', (req, res) => {
    return res.render('Add')
})
app.get('/View', (req, res) => {
    // console.log(UserModel);
    UserModel.find({})
        .then((record) => {
            // console.log(record);
            return res.render('View', {
                record
            });

        })
        .catch((err) =>{
            console.log(err);
            return false;
        })
})

app.post('/insertUser', uploadFile, (req, res) => {
    // console.log(req.file);
    // console.log(req.body.image);
    const { name, email,password,gender,hoby,city } = req.body;
    UserModel.create({
        name: name,
        email: email,
        password:password,
        gender:gender,  
        hoby:hoby,
        city:city,
        image :req.file.path
    })
        .then((res) => {
            console.log("Added...");
           return res.redirect('/View')

        })
        .catch((err) => {
            console.log(err);
            return false;
        })

  

})

app.get('/deletRecord',(req,res) =>{
    let eid = req.query.deletId;
    // console.log(eid);
    UserModel.findByIdAndDelete(eid)
    .then((data) => {
        // console.log(data);
        console.log("Deleted...");
        
        res.redirect('/View');

    })
    
})    

app.get('/editRecord',(req,res) =>{
    let editid = req.query.editId;
    // console.log(editid);
    UserModel.findById(editid)
    .then((single) => {
        // console.log(single);
        res.render('Edit', {
            single,
        });
    })
    .catch((err) => {
        console.log(err);
        return false;
    })
})

app.post('/UpdateUser',(req,res) =>{
    const {editId,name,email} = req.body;
    console.log(editId,name,email,password,gender,hoby,city);
    UserModel.findByIdAndUpdate(editId,{
        name:name,
        email:email,
        password:password,
        gender:gender,
        hoby:hoby,
        city:city
    })
    .then((data) =>{
        console.log(data);
        console.log("Updated");
        res.redirect('/View');
    })
    .catch((err) =>{
        console.log(err);
        return false;
    })

})


app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on port ${port}`)
})
