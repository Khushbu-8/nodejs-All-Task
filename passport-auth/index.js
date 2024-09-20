const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;
connectDB();

app.set('view engine',"ejs")

app.use(express.urlencoded());

// connect Passport 
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local')

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24  //expire after 24 hrs
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);




app.use('/',require('./routes/indexRoute'))

app.listen(port,(err) =>{
    if(err) {
        console.log(err);
        return false
    }

    console.log('Server is running on port 3000');
})