const express=require("express")
const { protect,authorize } = require("../middleware/userMiddleware")
const { getCourse, createCourse, updateCourse, deleteCourse, getCourseById } = require("../controllers/courseController")
const courseRoutes=express.Router()

courseRoutes.get("/",getCourse)


courseRoutes.post("/", protect,authorize('instructor','admin'),createCourse)

courseRoutes.get("/:id",getCourseById)

courseRoutes.put("/:id",protect,authorize('instructor','admin'),updateCourse)

courseRoutes.delete("/:id",authorize('instructor','admin'),deleteCourse)





module.exports=courseRoutes
