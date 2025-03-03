import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter)


export {app}