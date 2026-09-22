const express=require("express")
const { protect } = require("../middleware/userMiddleware")
const { getCourse, createCourse, updateCourse, deleteCourse, getCourseById } = require("../controllers/courseController")
const courseRoutes=express.Router()

courseRoutes.get("/",getCourse)


courseRoutes.post("/:id",createCourse)

courseRoutes.get("/:id",getCourseById)

courseRoutes.put("/:id",updateCourse)

courseRoutes.delete("/:id",deleteCourse)





module.exports=courseRoutes
