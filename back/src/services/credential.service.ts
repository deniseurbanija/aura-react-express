import { AppDataSource } from "../config/data.source";
import { Credential } from "../entities/Credential";

export const createCredential = async (
  email: string,
  password: string
): Promise<Credential> => {
  const newCredential: Credential = new Credential();
  newCredential.password = password;
  newCredential.email = email;
  AppDataSource.manager.save(newCredential);
  return newCredential;
};

export const validateCredentialService = async (
  email: string,
  password: string
) => {
  const foundCredential = await AppDataSource.getRepository(
    Credential
  ).findOneBy({ email: email });
  if (!foundCredential) {
    throw new Error("Credential not found");
  }
  if (password == foundCredential.password) {
    return foundCredential.id;
  } else {
    throw new Error("Incorrect password");
  }
};
