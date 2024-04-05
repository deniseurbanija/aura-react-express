import { IUser } from "../interfaces/IUser";
import { userDto } from "../interfaces/dto/userDto";
import { addCredentialService } from "./credential.service";

const users: IUser[] = [];

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const getUserByIdService = async (id: number) => {
  for (const user of users) {
    if (user.id == id) {
      return user;
    }
  }
};

export let userId: number = 1;
export const addUserService = async (userData: userDto): Promise<IUser> => {
  const { username, password, name, email, birthdate, nDni } = userData;
  const credentialId: number = await addCredentialService(username, password);
  const newUser: IUser = {
    id: userId,
    name,
    email,
    birthdate,
    nDni,
    credentialId,
  };
  users.push(newUser);
  userId++;
  return newUser;
};
