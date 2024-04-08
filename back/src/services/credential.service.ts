import { ICredential } from "../interfaces/ICredential";

const credentials: ICredential[] = [];

let credentialId: number = 1;
export const addCredentialService = async (
  username: string,
  password: string
) => {
  const newCredential: ICredential = {
    id: credentialId,
    username: username,
    password: password,
  };
  credentialId++;
  credentials.push(newCredential);
  return newCredential.id;
};

export const checkCredentialService = async (
  username: string,
  password: string
) => {
  for (const credential of credentials) {
    if (username == credential.username) {
      if (password == credential.password) {
        return credential.id;
      }
    }
  }
};
