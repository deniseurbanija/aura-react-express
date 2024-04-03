import { Router } from "express";
import { addAppointment, cancelAppointment, getAppointment, getAppointments } from "../controllers/appointment.controller";

const appointmentRouter = Router()

appointmentRouter.get("/appointments", getAppointments)
appointmentRouter.get("/appointment", getAppointment)
appointmentRouter.post("/appointment/schedule", addAppointment)
appointmentRouter.put("/appointment/cancel", cancelAppointment)


export default appointmentRouter