import mongoose ,{Schema} from "mongoose";

const TodoSchema=new Schema({
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    isCompleted:{
        type:boolean,
        require:true
    },
},{timestamps:true})

export const TodoModal=mongoose.model("Todo",TodoSchema)