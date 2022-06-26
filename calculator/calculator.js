//jshint esversion:6
const express = require('express');

const app = express();

const port = 3000;

app.get("/", function(req,res){
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.listen(port,function(){
  console.log("Server Berjalan");
});