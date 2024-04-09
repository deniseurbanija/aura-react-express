import { AppDataSource } from "../config/data-source";
import { getAllUsers, userModel } from "../config/repository/userRepository";
import IUserDto from "../dtos/IUserDTO";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialsService";
const users: IUser[] = [
  {
    id: 1,
    name: "Maximiliano",
    email: "maximiliano@gmail.com",
    birthdate: "1/9/1998",
    nDni: "40404040",
    credentialsId: 1,
  },
];

let userID: number = 2;

export const getUserService = async () => {
  const allUsers: User[] = await getAllUsers.findAllUsersFromDB();
  return allUsers;
};

export const getUserByIdService = async (id: number) => {
  const foundUser: IUser | undefined = users.find((user) => user.id === id);
  if (!foundUser) throw Error("Usuario no encontrado");
  return foundUser;
};

export const createUserService = async (
  createUserDTO: IUserDto
): Promise<User> => {
  const newCredential: Credential = await createCredential({
    username: createUserDTO.username,
    password: createUserDTO.password,
  });
  
  //es lo mismo que AppDataSource.create(createUserDTO);

  const newUser = {
    name: createUserDTO.name,
    email: createUserDTO.email,
    birthdate: createUserDTO.birthdate,
    nDni: createUserDTO.nDni
  }
  const userCreated = userModel.create(newUser)

  // const newUser: User = new User();
  //   (newUser.name = createUserDTO.name),
  //   (newUser.email = createUserDTO.email),
  //   (newUser.birthdate = createUserDTO.birthdate),
  //   (newUser.nDni = createUserDTO.nDni),
  //   newUser.credential = newCredential
  //   AppDataSource.manager.save(newUser);
  userCreated.credential = newCredential;
  userModel.save(userCreated)
  return userCreated;
};