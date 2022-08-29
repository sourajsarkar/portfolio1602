const express = require('express');
const app = express();
const port=process.env.PORT || 5000;
const path = require('path');

require("./db/conn")
const Schema = require('./models/schema');
const staticPath = path.join(__dirname,"./templates");

app.set('view engine','hbs');
app.set("views",staticPath);
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
});


  app.post("/index", async(req, res) => {
    try{
     const register=new Schema({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message

     })

     const done=await register.save();
     res.redirect("/");


    }catch(error){
        res.status(400).send(error);
    }
   
  });
  

app.listen(port,()=>{
    console.log("connection successfull at "+port);
});