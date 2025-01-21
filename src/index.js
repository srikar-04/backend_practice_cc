import dotenv from "dotenv"
import { app } from "./app.js";
import {connectDB} from "./db/index.js"

dotenv.config(
    {
        path: "./.env"
    }
)

connectDB()
.then( () =>  app.listen(PORT, () => {
    console.log("app is listening on port : ",PORT);
}))
.catch(error =>  {
    console.log("MongoDb connection error: ", error);
})

const PORT = parseInt(process.env.PORT, 10) || 8000

