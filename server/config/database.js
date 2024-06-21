const  mongoose = require("mongoose");

const connectDB = () =>{
    mongoose.connect(process.env.MONGODB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Mongodb Connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;