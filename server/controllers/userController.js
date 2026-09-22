const UserModel = require("../models/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


async function login(req,res){
    const { email,password, }=req.body

    if( !email || !password ){
        return res.status(400).json({
            "message":"invalid input"
        })
    }

    const existingUser=await UserModel.findOne({email:email})
    console.log(existingUser)

    if(!existingUser){
         return res.status(400).json({
            "message":"email is not registered"
        })

    }
    const checkPassword=await bcrypt.compare(password,existingUser.password)

    if(!checkPassword){
        return res.status(400).json({
            "message":"Wrong password"
        })
    }

    const token=jwt.sign({id:existingUser._id},process.env.SECRET_KEY,)

    res.status(200).json({
        "message":"Login Successfully",
        "Token":token
    })
    
}

async function register(req,res){
    const {name, email,password, role}=req.body

    if(!name || !email || !password || !role){
        return res.status(400).json({
            "message":"invalid input"
        })
    }

    const existingUser=await UserModel.findOne({email:email})

    if(existingUser){
         return res.status(400).json({
            "message":"email already registered"
        })

    }

    const encryptPassword=await bcrypt.hash(password,4)
    
    const newUser=await UserModel.create({
        name:name,
        email:email,
        password:encryptPassword,
        role:role
    })
    

    res.status(200).json({
        "message":"User Registered Successfully"
    })
}



module.exports={
    login ,
    register
}