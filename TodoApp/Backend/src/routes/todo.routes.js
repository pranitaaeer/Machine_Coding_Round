import {Router} from 'express'
import { CreateTodo, DeleteTodo, getTodo } from '../controllers/Todo.controllers'

const router=Router()

router.post("/create",CreateTodo)
router.get("/get-todo",getTodo)
router.delete("delete-todo/:id",DeleteTodo)

export default router