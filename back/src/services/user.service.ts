import { AppDataSource } from "../config/data.source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { userDto } from "../interfaces/dto/userDto";
import { createCredential } from "./credential.service";
import { UserModel } from "../config/data.source";

export const getUsersService = async () => {
  const users: User[] = await UserModel.find({
    relations: { appointments: true },
  });
  return users;
};

export const getUserByIdService = async (id: number) => {
  const user: User | null = await UserModel.findOne({
    where: { id },
    relations: { appointments: true },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const addUserService = async (userData: userDto): Promise<User> => {
  const newCredential: Credential = await createCredential(
    userData.email,
    userData.password
  );

  //es lo mismo que AppDataSource.create(createUserDTO);

  const newUser = {
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
  };
  const userCreated = UserModel.create(newUser);

  userCreated.credential = newCredential;
  UserModel.save(userCreated);
  return userCreated;
};
