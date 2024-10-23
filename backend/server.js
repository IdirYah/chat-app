import express from "express"
import dotenv from "dotenv"
import authRoutes from "../backend/routes/auth.routes.js"
import connectDB from "./db/connectDB.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server running on port ${PORT}`)
})