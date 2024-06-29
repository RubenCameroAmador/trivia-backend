import Router  from "express";
import { login, register } from "../controllers/auth.controller.js";

const auth_route = Router()

auth_route.post('/register', register)

auth_route.post('/login', login)

export default auth_route