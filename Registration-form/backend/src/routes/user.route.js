import {Router} from "express"
import { register } from "../controllers/user.controller.js"

const route=Router()

route.post("/register",register)
export default route