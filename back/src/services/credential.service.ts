import { AppDataSource } from "../config/data.source";
import { Credential } from "../entities/Credential";

let credentialId: number = 1;
export const createCredential = async (
  username: string,
  password: string
): Promise<Credential> => {
  const newCredential: Credential = new Credential();
  newCredential.id = credentialId++;
  newCredential.password = password;
  newCredential.username = username;
  AppDataSource.manager.save(newCredential);
  return newCredential;
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
