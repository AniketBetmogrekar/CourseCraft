const  Course=require('../models/course')


async function getCourse(req,res){
    try{
        const courses=await Course.find()

        return res.status(200).send(courses)
    }catch(error){
       return res.status(500).send({
            message:"unable to access course"
        })
    }

}
async function createCourse(req,res){
    try{
        const {title, description,category,level, price ,duration}=req.body
        if(!title || !description || !category || !level || !price || !duration){
            return res.status(400).send({
                message:"Bad Request"
            })
        }

        const existingCourse=await Course.findOne({title: title})

        if(existingCourse){
            return res.status(400).send({
                message:"Bad request, course Already exists"
            })
        }

        const course= new Course({
            title:title,
            description:description,
            instructor:req.user._id,
            category:category,
            level:level,
            price:price,
            duration:duration,
        })
        await course.save()

        return res.status(200).send({
            message:"New course created"
        })

    }
    catch(error){
        return res.status(500).send({
            "message":"unable to create course"
        })
    }

}

function deleteCourse(req,res){
    try{

    }
    catch(error){
        return res.status(500).send({
            "message":"unable to delete course"
        })
    }

}

function updateCourse(req,res){

}

function getCourseById(req,res){

}

module.exports={
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
    getCourseById
}