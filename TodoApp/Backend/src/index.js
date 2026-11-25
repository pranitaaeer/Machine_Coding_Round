import express from "express"
import dotenv from "dotenv"
import DBConnect from "./config/DbConnect.js"
import cors from "cors"
dotenv.config()

const app=express()

const PORT=process.env.PORT || 4000

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
import TodoRouter from "./routes/todo.routes.js"
app.use("/api",TodoRouter)

app.listen(PORT,()=>{
    console.log(`app is listen on PORT: ${PORT}`)
    DBConnect()

})
