const express = require("express");
const connectDB = require("./config/db");
const app = express()
const port = 4000 ;
connectDB()

app.set('view engine','ejs')
const path = require('path');
app.use(express.urlencoded());
app.use(express.json());

const cookieParser = require('cookie-parser')
app.use(cookieParser());

// static file 
app.use('/uploads',express.static(path.join(__dirname,"uploads")));
app.use(express.static(path.join(__dirname, 'public')))

// attechment of passport
const passport = require('passport');
const session = require('express-session');
const passportLocal = require('./config/passportLocal')

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 24*60*60*1000 // 1 day
    }

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser)

app.use('/',require('./routes/indexRoutes'))

app.listen(port,(err) =>{
    if(err) console.log(err);

    console.log(`server is running on port ${port}`)
})
