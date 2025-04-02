// mongodb+srv://bibekchy2022:bibek1234@cluster0.6kupa.mongodb.net/?

import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://bibekchy2022:bibek1234@cluster0.6kupa.mongodb.net/presc").then(()=>console.log("Db connected"));

const connectDB=async ()=>{
    mongoose.connection.on('connected',()=>console.log("Databse Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/presc`)
}

export default connectDB