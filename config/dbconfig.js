const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://madhurcool3:Madhur123@cluster0.q4neano.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;