const express = require('express');
const app = express();

const port = 8000;


let Data = [];

app.use(express.urlencoded());


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    return res.render('table', {
        User: Data
    })
})

app.get('/add', (req, res) => {
    return res.render('form')
})

app.post('/insertRecord', (req, res) => {
    //    console.log(req.body);
    const { task, status ,date} = req.body
    let obj = {
        id: Date.now(),
        task: task,
        status: status,
        date: date
    }
    Data.push(obj)
    return res.redirect('/')
})

app.get('/DeletRecord', (req, res) => {
    let id = req.query.id;
    // console.log(id);
    const deletDataa = Data.filter(val => val.id != id)
    Data = deletDataa;
    return res.redirect('/')
})
app.get('/EditRecord', (req, res) => {
    let editid = req.query.id
    // console.log(editid);
    let editData = Data.find(val => val.id == editid)
    return res.render('Edit', {
        editData
    })
})
app.post('/UpdateRecord', (req, res) => {
    let eid = req.body.id;
    console.log(eid);
    let task = req.body.task
    let status = req.body.status
    let date = req.body.date
    let r = Data.map((val) => {
        if (val.id == eid) {
            val.task = task,
            val.status = status,
             val.date = date
        }
        return val;
    })


    Data = r;
    console.log(r);
    console.log("Update Successfully...");
    return res.redirect('/')

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server start = ${port}`);
})