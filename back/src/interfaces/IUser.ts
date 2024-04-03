import { IDate } from "./IDate";


export interface IUser{
    id: number,
    name: string,
    email: string,
    birthdate: IDate, //Interface???
    nDni: number,
    credentialId: number  // ???
}

