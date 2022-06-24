//jshint esversion:6
const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Resky");
})

app.get("/contact", function(req,res){
    res.send('Contact me at : reskybayu234@gmail.com');
})

app.get("/about", function(req,res){
    res.send("My name Bayu i love code");
})

app.get("/hobbies", function(req,res){
    res.send("Badminton");
})

app.listen(3000,  function(){
    console.log("server aman");
});  