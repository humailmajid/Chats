const express=require("express");
const mongoose=require("mongoose")
const path=require("path")
const Chat=require("./models/chat.js")
const app=express();

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
main().then(()=>{
    console.log("Connection was succesfull")
    }).catch(err => console.log(err));
    
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    
    }
//index route
app.get("/chats",async(req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats})
})
//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})
//create route
app.post("/chats",(req,res)=>{
    let {from,message,to}=req.body;
    let newChat=new Chat({
        from:from,
        message:message,
        to:to,
        create_at:new Date(),
    })
    newChat.save().then(res=>{
        console.log("Chat is saved")

    }).catch(err=>{
        console.log(err)
    })
 res.redirect("/chats")
})
//Edit Route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat= await new Chat.findById(id);
    

})
//root 
app.get("/",(req,res)=>{
    res.send("root is working")
})
app.listen(8080,(req, res)=>{
    console.log("Server is listening on port 8080");
});