import { IDate, ITime } from "./IDate";

export enum statusOption {
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
