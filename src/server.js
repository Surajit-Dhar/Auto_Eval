// install and import express
const express = require ("express");
const connect = require("./config/db");
const Data = require("./assets/user.json");
// const express = () => {};
let app = express();



app.get("/", function(req,res) {
    res.sendFile("./assets/users.html" , {root: __dirname})
});

app.get("/users", function(req,res) {
    res.sendFile("./assets/user.json" , {root: __dirname})
});


app.get('/users/:id',async(req,res)=>{
    try {
           
           for(var i=0;i<Data.length;i++){
             if(Data[i].id==req.params.id){
                res.send(Data[i])
             }
           }
            
        
    } 
    catch (error) {
        return res.send(error)
    }
})

app.post('/users',async(req,res)=>{
    try {
           
           for(var i=0;i<Data.length;i++){
             if(Data[i].id==req.params.id){
                res.send(Data[i])
             }
           }
            
        
    } 
    catch (error) {
        return res.send(error)
    }
})
// Code here


app.listen (8000 , async() => {
    try{
      await connect();
      console.log("Listing on port 8000");
    }catch(err){
        console.log(err);
    }
})
// Note: Do not remove this export statement
module.exports = app;
