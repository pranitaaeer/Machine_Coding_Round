import { TodoModal } from "../models/Todo.models.js"

export const CreateTodo=async(req,res)=>{
  try {
    const {title, description}=req.body
    console.log("data:",title,description)

    if([title,description].some((elm)=>!elm || elm.trim()==="")){
      return res.status(400).json({message:"All fields are required"})
    }
    const newTodo=await TodoModal.create({
        title,
        description
    })
    if(!newTodo){
      return res.status(400).json({message:"Err in creating Todo"})

    }
    return res.status(201).json({message:"Todo created sucessfully",todo:newTodo})
    
  } catch (error) {
    console.log("err in creating todo")
    return res.status(500).json({message:"Internal server Err",err:error.message})
  }
}

export const getTodo=async(_,res)=>{
  try {
    
   const Todos=await TodoModal.find()
   return res.status(200).json({message:"Todos get sucessfully",todos:Todos.lemgth>0 ? Todos : []})

  } catch (error) {
    console.log("err in creating todo")
    return res.status(500).json({message:"Internal server Err",err:error.message})
  }
}

export const DeleteTodo=async(req,res)=>{
  try {
    const {id} =req.params

    if(!id){
      return res.status(400).json({message:"id not found"})
    }
    const existedTodo=await TodoModal.findById(id)
    if(!existedTodo){
      return res.status(404).json({message:"Todo not found or already deleted"})
    }
    const deletedTodo=await TodoModal.deleteOne({_id:id})
    if(!deletedTodo){
      return res.status(400).json({message:"err in deleting todo"})
    }
    return res.status(200).json({message:"todo deletd sucessfully"})
    
  } catch (error) {
    console.log("err in creating todo")
    return res.status(500).json({message:"Internal server Err",err:error.message})
  }
}
