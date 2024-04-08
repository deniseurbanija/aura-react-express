import { IAppointment } from "../interfaces/IAppointment";
import { appointmentDto } from "../interfaces/dto/appointmentDto";
import { statusOption } from "../interfaces/IAppointment";

const appointments: IAppointment[] = [];

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
  for (const appointment of appointments) {
    if (appointment.id == id) {
      return appointment;
    }
  }
};

let appointmentId: number = 1;

export const addAppointmentService = async (
  appointmentData: appointmentDto
): Promise<IAppointment> => {
  const { date, time, userId, status } = appointmentData;
  if (!userId) {
    throw new Error("Can´t add an appointment without user ID");
  }
  const newAppointment: IAppointment = {
    id: appointmentId,
    date,
    time,
    userId,
    status,
  };
  appointmentId++;
  return newAppointment;
};

export const cancelAppointment = async (id: number) => {
  for (const appointment of appointments) {
    if ((appointment.id = id)) {
      appointment.status = statusOption.CANCELLED;
    }
  }
};
