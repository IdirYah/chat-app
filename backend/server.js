import express from "express"
import dotenv from "dotenv"
import authRoutes from "../backend/routes/auth.routes.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))