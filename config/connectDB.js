const mongoose = require("mongoose");

const connectDB = async () =>{
try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log (`Data connected successfully`);
} catch (error) {
  console.log(`Data Base connected Failed`)  
}
}

module.exports = connectDB;