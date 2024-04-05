import userRouter from "./user.router";
import appointmentRouter from "./appointment.router";
import { Router} from "express";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/appointments", appointmentRouter);

export default indexRouter