//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({extended : true}))
app.use(express.urlencoded({extended : true}));
// app.use(express.json());
const port = 3000;

app.get("/", function(req,res){
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  const requestBody = {
    num1 : req.body.num1,
    num2 : req.body.num2
  }
  console.log(requestBody)
  res.send("Terimakasih " + requestBody.num1 + requestBody.num2);
});

app.listen(port,function(){
  console.log("Server Berjalan");
});