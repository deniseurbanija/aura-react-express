import { appointmentDto } from "../interfaces/dto/appointmentDto";
import { AppDataSource } from "../config/data.source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { UserModel, AppointmentModel } from "../config/data.source";

export const getAppointmentsService = async () => {
  const appointments = await AppointmentModel.find();
  return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
  const appointment = await AppointmentModel.findOneBy({
    id: id,
  });
  return appointment;
};

export const addAppointmentService = async (
  appointmentData: appointmentDto
) => {
  const { motive, date, time, userId, status } = appointmentData;
  if (!userId) {
    throw new Error("Can´t add an appointment without user ID");
  }
  const newAppointment = await AppointmentModel.create({
    motive,
    date,
    time,
    status,
  });
  const foundUser = await UserModel.findOneBy({
    id: userId,
  });

  if (foundUser) {
    newAppointment.user = foundUser;
    await AppointmentModel.save(newAppointment);
  }

  return newAppointment;
};
export const cancelAppointmentService = async (id: number) => {
  const foundAppointment = await AppointmentModel.findOneBy({ id });
  if (!foundAppointment) {
    throw new Error("Appointment not found");
  }
  foundAppointment.status = "cancelled";
  await AppointmentModel.save(foundAppointment);
  return foundAppointment; // Devuelve el turno cancelado
};
