import mongoose ,{Schema} from "mongoose";

const TodoSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
    },
},{timestamps:true})

export const TodoModal=mongoose.model("Todo",TodoSchema)