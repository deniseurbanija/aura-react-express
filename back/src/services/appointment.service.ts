import { IAppointment } from "../interfaces/IAppointment";

const appointments: IAppointment[] = [];

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointments;
};

export const getAppointmentByIdService = async (
  id: number
)=> {
  for (const appointment of appointments) {
    if (appointment.id == id) {
      return appointment;
    }
  }
};

export const addAppointmentService = async () => {

};
