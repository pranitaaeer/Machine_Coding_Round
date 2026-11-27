import bcrypt from "bcrypt"
import { UserModal } from "../models/user.modal.js"
import jwt from "jsonwebtoken"

export const register=async(req ,res)=>{
    try {
        const {username,email,password}=req.body
        
        const existedUser=await UserModal.findOne({$or:[{email},{username}]})

        if(existedUser){
            return res.status(409).json({message:"user already exist with this email or username"})
        }

        if([username,email,password].some((elm)=>!elm || elm.trim()==="")){
            return res.status(400).json({message:"All fields are required"})
        }

        const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const isCorrectEmail=regex.test(email)
        if(!isCorrectEmail){
            return res.status(400).json({message:"plz enter a valid email address"})
        }

        const hashedpassword=await bcrypt.hash(password,10)
        if(!hashedpassword){
            return res.status(400).json({message:"err in password hashing"})
        }
        const user=await UserModal({
            username,
            email,
            password
        })
       const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiersIn:"7d"})
       res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        maxAge:24*60*60*1000,
        sameSite:"none"
       })
        return res.status(201).json({message:"user registerd successfully",user:user,token})
    } catch (error) {
        console.log("err in registering user",error.message)
        return res.status(500).json({message:"err in registering user",err:error.message})

    }
}