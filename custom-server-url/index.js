const http = require('http');

const port = 8000;

const fs = require('fs');

 http.createServer((req, res) => {
   let fileName = "";
// console.log(req.url);

    switch(req.url){
        case '/':
            fileName = "index.html";
        break;
        case '/about':
            fileName = "about.html";
            break;
        case '/contect':
            fileName = "contect.html";
            break;
        case '/err404':
            fileName = "err404.html";
            break;

    }
    fs.readFile(fileName,(err,result) =>{
        if(err){
            console.log("File is not found");
            return false
        }
        res.end(result);
    })
    
 }).listen(port)
   