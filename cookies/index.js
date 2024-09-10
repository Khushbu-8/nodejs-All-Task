const express = require("express");
const connectDB = require("./config/db");
const app = express()
const port = 8000 ;
connectDB()

app.set('view engine','ejs')
app.use(express.urlencoded())

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use('/',require('./routes/indexRoutes'))

app.get('/dash', (req, res) => {
    return res.render("Viewblog")
})


app.get('/add', (req, res) => {
    return res.render("Addblog")
})

app.get('/edit', (req, res) => {
    return res.render("Editblog")
})




app.listen(port,(err) =>{
    if(err) console.log(err);

    console.log(`server is running on port ${port}`)
})
