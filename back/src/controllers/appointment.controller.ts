import { Request, Response } from "express";
import {
  addAppointmentService,
  cancelAppointmentService,
  getAppointmentByIdService,
  getAppointmentsService,
} from "../services/appointment.service";

export const getAppointments = async (req: Request, res: Response) => {
  const appointments = await getAppointmentsService();
  res.status(200).send(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const appointment = await getAppointmentByIdService(Number(req.params.id));
  res.status(200).send(appointment);
};

export const addAppointment = async (req: Request, res: Response) => {
  const newAppointment = await addAppointmentService(req.body);
  res.status(201).send(newAppointment);
};

export const cancelAppointment = async (req: Request, res: Response) => {
  const appoitmentCancelled = await cancelAppointmentService(
    Number(req.params.id)
  );
  res.status(201).send(appoitmentCancelled);
};
