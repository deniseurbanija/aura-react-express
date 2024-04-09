import { AppDataSource } from "../config/data.source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { userDto } from "../interfaces/dto/userDto";
import { createCredential } from "./credential.service";

export const getUsersService = async () => {
  const users: User[] = await AppDataSource.getRepository(User).find({
    relations: { appointment: true},
  });
  return users;
};

export const getUserByIdService = async (id: number) => {
  const user: User | null = await AppDataSource.getRepository(User).findOneBy({
    id: id,
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const addUserService = async (userData: userDto): Promise<User> => {
  const newCredential: Credential = await createCredential(
    userData.username,
    userData.password
  );

  //es lo mismo que AppDataSource.create(createUserDTO);

  const newUser = {
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
  };
  const userCreated = AppDataSource.getRepository(User).create(newUser);

  userCreated.credential = newCredential;
  AppDataSource.getRepository(User).save(userCreated);
  return userCreated;
};
