import { IDate } from "../IDate";

export interface userDto {
  username: string;
  password: string;
  name: string;
  email: string;
  birthdate: IDate;
  nDni: number;
}
