const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://tahawalaqadr:tahataha123@cluster0.y4aqg9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})