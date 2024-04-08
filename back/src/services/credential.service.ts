import { AppDataSource } from "../config/data.source";
import { Credential } from "../entities/Credential";
import { ICredential } from "../interfaces/ICredential";

const credentials: ICredential[] = [];

let credentialId: number = 1;
export const addCredentialService = async (
  username: string,
  password: string
) => {
  const newCredential = AppDataSource.getRepository(Credential).create({
    id: credentialId++,
    username: username,
    password: password,
  });
  return newCredential.id;
};

export const validateCredentialService = async (
  username: string,
  password: string
) => {
  const foundCredential = await AppDataSource.getRepository(
    Credential
  ).findOneBy({ username: username });
  if (!foundCredential) {
    throw new Error("Credential not found");
  }
  if (password == foundCredential.password) {
    return foundCredential.id;
  } else {
    throw new Error("Incorrect password");
  }
};
