import mongoose from "mongoose";

const url = process.env.MONGO_URI;

mongoose.connect('mongodb+srv://login:service@cluster0.fgqy0.mongodb.net/loginService?retryWrites=true&w=majority', {
    
}).then((db => console.log('database connected')))
    .catch(err => console.log(err ))