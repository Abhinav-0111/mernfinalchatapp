import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const Connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URl);
        console.log("Database connect successfully");
    } catch (error) {
        console.log("Database not connect", error.message);
    }
};

export default Connection;
