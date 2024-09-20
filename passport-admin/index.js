const express = require('express');

const port = 8000;

const app = express();

const path = require('path');
const connectDB = require('./config/db');

connectDB()

app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));

const passport = require('passport')
const session = require('express-session')
const passportLocal = require('./config/passport-local')

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {  
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
    
}))

app.use(passport.initialize())
app.use(passport.session())
// app.use(passportLocal.initialize())
app.use(passport.setUser)

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);

})