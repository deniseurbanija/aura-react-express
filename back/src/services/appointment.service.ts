import { appointmentDto } from "../interfaces/dto/appointmentDto";
import { AppDataSource } from "../config/data.source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const getAppointmentsService = async () => {
  const appointments = await AppDataSource.getRepository(Appointment).find();
  return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
  const appointment = await AppDataSource.getRepository(Appointment).findOneBy({
    id: id,
  });
  return appointment;
};

let appointmentId: number = 1;
export const addAppointmentService = async (
  appointmentData: appointmentDto
) => {
  const { motive, date, time, userId, status } = appointmentData;
  if (!userId) {
    throw new Error("Can´t add an appointment without user ID");
  }
  const newAppointment = await AppDataSource.getRepository(Appointment).create({
    id: appointmentId++,
    motive,
    date,
    time,
    status,
  });
  const user = await AppDataSource.getRepository(User).findOneBy({
    id: userId,
  });

  if (!user) {
    throw Error("User not found");
  }

  if (!user.appointment) {
    user.appointment = [];
  }
  user.appointment.push(newAppointment);
  await AppDataSource.getRepository(Appointment).save(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (id: number) => {
  const foundAppointment: Appointment | null =
    await AppDataSource.getRepository(Appointment).findOneBy({
      id: id,
    });
  if (!foundAppointment) {
    throw Error("Appointment not found");
  }
  foundAppointment.status = "cancelled";
  await AppDataSource.getRepository(Appointment).save(foundAppointment);
};
