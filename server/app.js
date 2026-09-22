const express= require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv")
const courseRoutes = require("./routes/courseRoutes")
const userRoutes = require("./routes/userRoutes")

const app =express()

app.use(express.json())
dotenv.config()

app.use("/api/courses",courseRoutes)
app.use("/api/auth",userRoutes)
connectDB()



app.listen(3000,()=>{
    console.log("listening to the server")
})