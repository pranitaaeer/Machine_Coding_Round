import express from "express"
import dotenv from "dotenv"
import DBConnect from "./config/DbConnect.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT || 4000

import TodoRouter from "./routes/todo.routes.js"
app.route("/api",TodoRouter)

app.listen(()=>{
    console.log(`app is listen on PORT: ${PORT}`)
    DBConnect()

})
