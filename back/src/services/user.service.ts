import { AppDataSource } from "../config/data.source";
import { User } from "../entities/User";
import { IUser } from "../interfaces/IUser";
import { userDto } from "../interfaces/dto/userDto";
import { addCredentialService } from "./credential.service";

const users: IUser[] = [];

export const getUsersService = async () => {
  const users = await AppDataSource.getRepository(User).find();
  return users;
};

export const getUserByIdService = async (id: number) => {
  const user = await AppDataSource.getRepository(User).findOneBy(id);
  if (user) {
    return user;
  } else {
    return "user not found";
  }
};

export let userId: number = 1;
export const addUserService = async (userData: userDto) => {
  const { username, password, name, email, birthdate, nDni } = userData;
  const credentialId: number = await addCredentialService(username, password);
  const newUser = AppDataSource.getRepository(User).create({
    id: userId,
    name,
    email,
    birthdate,
    nDni,
    credentialId,
  });
  const result = await AppDataSource.getRepository(User).save(newUser);
  return result;
};
