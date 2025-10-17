import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; 

if(!MONGODB_URI) {
  throw new Error('missing mongodb uri enviromnet')
}

const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "portfolio", 
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectMongoDB;