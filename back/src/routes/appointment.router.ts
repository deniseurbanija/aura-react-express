import { Router } from "express";
import {
  addAppointment,
  cancelAppointment,
  getAppointmentById,
  getAppointments,
} from "../controllers/appointment.controller";

const appointmentRouter = Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.post("/schedule", addAppointment);
appointmentRouter.put("/cancel", cancelAppointment);

export default appointmentRouter;
