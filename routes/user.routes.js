import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const Userrouter = Router()

Userrouter.post('/register',registerUser);


export default Userrouter;