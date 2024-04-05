import { Router } from "express";
import { addAppointment, cancelAppointment, getAppointment, getAppointments } from "../controllers/appointment.controller";

const appointmentRouter = Router()

appointmentRouter.get("/", getAppointments)
appointmentRouter.get("/:id", getAppointment)
appointmentRouter.post("/schedule", addAppointment)
appointmentRouter.put("/cancel", cancelAppointment)


export default appointmentRouter