import { Router } from "express";
import { getUsers, getUserById, addUser, login } from "../controllers/user.controller";

const userRouter = Router()

userRouter.get("/users", getUsers)
userRouter.get("/users/:id", getUserById)
userRouter.post("/users/register", addUser)
userRouter.post("/users/login", login)


export default userRouter