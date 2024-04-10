import { Request, Response } from "express";
import {
  addAppointmentService,
  cancelAppointmentService,
  getAppointmentByIdService,
  getAppointmentsService,
} from "../services/appointment.service";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await getAppointmentsService();
    res.status(200).send(appointments);
  } catch (error) {
    res.status(404).send("appointments not found");
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointment = await getAppointmentByIdService(Number(req.params.id));
    res.status(200).send(appointment);
  } catch (error) {
    res.status(404).send("appointments not found");
  }
};

export const addAppointment = async (req: Request, res: Response) => {
  try {
    const newAppointment = await addAppointmentService(req.body);
    res.status(201).send(newAppointment);
  } catch (error) {
    res.status(400).send("incorrect data");
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const appoitmentCancelled = await cancelAppointmentService(
      Number(req.params.id)
    );
    res.status(201).send(appoitmentCancelled);
  } catch (error) {
    res.status(404).send("incorrect data");
  }
};
