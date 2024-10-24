import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "../backend/routes/auth.routes.js"
import messageRoutes from "../backend/routes/message.routes.js"
import connectDB from "./db/connectDB.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server running on port ${PORT}`)
})