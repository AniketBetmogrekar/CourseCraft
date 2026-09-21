const express= require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv")
const courseRoutes = require("./routes/courseRoutes")

const app =express()


dotenv.config()

app.use("/api/courses",courseRoutes)

connectDB()



app.listen(3000,()=>{
    console.log("listening to the server")
})