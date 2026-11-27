import mongoose,{Schema} from "mongoose"

const UserSchema=new Schema({
    username:{
        type:String,
        lowercase:true,
        required:[true,{message:"username is required"}]
    },
    email:{
        type:String,
        required:true,
        required:[true,{message:"email is required"}]
    },
    password:{
        type:String,
        required:[true,{message:"username is required"}]
    }
},{
    timestamps:true
})
 export const UserModal=mongoose.model("User",UserSchema)