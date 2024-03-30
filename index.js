const express=require("express");
const mongoose=require("mongoose")
const path=require("path")
const Chat=require("./models/chat.js")
const app=express();
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
main().then(()=>{
    console.log("Connection was succesfull")
    }).catch(err => console.log(err));
    
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    
    }

app.get("/",(req,res)=>{
    res.send("Working")
})
app.listen(8080,(req, res)=>{
    console.log("Server is listening on port 8080");
});