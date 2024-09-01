import { Router } from "express";
import { googleAuth } from "../controllers/user.controller";

const googleRouter = Router();

googleRouter.post("/google", googleAuth);

export default googleRouter;
