import { IDate, ITime } from "../IDate";

enum statusOption {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

export interface appointmentDto {
  date: IDate; //??
  time: ITime; //??
  userId: number;
  status: statusOption;
}
