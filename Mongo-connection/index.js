const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;
connectDB();
app.use(express.json());
app.use(express.urlencoded())


app.listen(port,(err) =>{
    if(err) {
        console.log(err);
        return false
    }

    console.log('Server is running on port 3000');
})