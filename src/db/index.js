import mongoose from "mongoose";
import{DB_NAME} from "../utils/constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDb connected!! DB host ", connectionInstance.connection.host)
    } catch (error) {
        console.log("DB connection failed!!! DB host ",error);
        
    }
}

export {connectDB}