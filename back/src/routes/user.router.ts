import { Router } from "express";
import {
  getUsers,
  getUserById,
  addUser,
  login,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", addUser);
userRouter.post("/login", login);

export default userRouter;
