import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import DBConnect from './config/DBConnect.js'
import cookieparser from "cookie-parser"

dotenv.config()

const app=express()
const PORT=process.env.PORT || 4000

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieparser())

import UserRouter from "./routes/user.route.js"
app.use("/api",UserRouter)
app.listen(PORT ,()=>{
    console.log(`app is running on PORT :${PORT}`)
    DBConnect()
}) 