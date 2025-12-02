import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    if (connect) {
      console.log("Connected successfully to mongodb");
    }
  } catch (error) {
    console.log("Error connecting to the database: ", error);
  }
}

export default connectDB;
