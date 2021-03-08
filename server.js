const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("<h1>Hello, World </h1>");
})

app.get("/contact", function(req, res){
    res.send("<h2>Contact Me: siddharth.desai1996@gmail.com</h2>");
})

app.get("/about", function(req, res){
    res.send("<h2>Iam Siddharth Desai</h2><p>Iam a PRO-grammer, if you know what i mean</p>");
})

app.get("/hobbies", function(req, res){
     res.send("<h2>Football, Painting, Sketching, Music</h2>");
})


app.listen(3000, function(){
    console.log("Server stared on port 3000");
});
