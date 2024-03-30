const mongoose=require("mongoose")
const Chat=require("./models/chat.js")
main().then(()=>{
    console.log("Connection was succesfull")
    }).catch(err => console.log(err));
    
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    
    }
    const allChats = [
        {
            from: "Maya",
            to: "Asma",
            message: "Send me cute stickers",
            create_at: new Date()
        },
        {
            from: "John",
            to: "Alice",
            message: "How was your day?",
            create_at: new Date()
        },
        {
            from: "Alice",
            to: "John",
            message: "It was good! Thanks for asking.",
            create_at: new Date()
        },
        {
            from: "Asma",
            to: "Maya",
            message: "Sure! Here are some stickers 🐻🌸",
            create_at: new Date()
        },
        {
            from: "Chris",
            to: "Emma",
            message: "Hey, what's up?",
            create_at: new Date()
        },
        {
            from: "Emma",
            to: "Chris",
            message: "Not much, just chilling. How about you?",
            create_at: new Date()
        },
        {
            from: "Alex",
            to: "Sam",
            message: "Did you watch the game last night?",
            create_at: new Date()
        },
        {
            from: "Sam",
            to: "Alex",
            message: "Yes, it was amazing! What a comeback!",
            create_at: new Date()
        },
        {
            from: "Sarah",
            to: "Mike",
            message: "Can you pick up some groceries on your way home?",
            create_at: new Date()
        },
        {
            from: "Mike",
            to: "Sarah",
            message: "Sure thing, any specific items you need?",
            create_at: new Date()
        }
    ];
    Chat.insertMany(allChats)
    