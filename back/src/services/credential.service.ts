import { ICredential } from "../interfaces/ICredential";

const credentials: ICredential[] = []

export const addCredentialService = async (username: string, password: string) =>{
    const newCredential: ICredential = {
        id: 1,
        username: username,
        password:password
    }
    credentials.push(newCredential)
    return newCredential.id
}

export const checkCredentialService = async (username: string, password: string) => {
    for(let i=1; i < credentials.length; i++){
        if(username == credentials[i].username){
            if(password == credentials[i].password){
                return credentials[i].id
            }
        }
    }
}