import { IDate, ITime } from "./IDate";

enum statusOption {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}

export interface IAppointment{
    id: number, 
    date: IDate, //??
    time: ITime, //??
    userId: number,
    status: statusOption
}
