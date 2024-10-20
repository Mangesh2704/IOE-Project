const mongoose = require('mongoose');
const URI = 'mongodb+srv://saishrane1111:1234@cluster0.1ysct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("Database Connected Successfully");        
    }catch(error){
        console.log("Database not Connected")
        console.error(error);
    }
}
module.exports = connectDb;