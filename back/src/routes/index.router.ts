import userRouter from "./user.router";
import appointmentRouter from "./appointment.router";
import { Router } from "express";
import googleRouter from "./googleAuth.router";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/appointments", appointmentRouter);
indexRouter.use("/auth", googleRouter);

export default indexRouter;
