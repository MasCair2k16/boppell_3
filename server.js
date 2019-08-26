//to install dependencies: npm install <pkg> --save

const express = require("express");

const port = process.env.PORT || 3000;

var http = require('http');
var path = require('path');

const app = express();
var server = http.createServer(app);

app.use(express.static("static"));

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname + '/static/'));

});

app.listen(port, () => {console.log(`'http://localhost:${port}`)});
