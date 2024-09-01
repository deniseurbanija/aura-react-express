import { Request, Response } from "express";
import {
  addUserService,
  getUserByIdService,
  getUsersService,
} from "../services/user.service";
import { validateCredentialService } from "../services/credential.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send("users not found");
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await getUserByIdService(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send("user not found");
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await addUserService(userData);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send("incorrect data");
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const credentialId = await validateCredentialService(email, password);
    const foundUser = await getUserByIdService(credentialId);
    res.status(200).send({ login: true, foundUser });
  } catch (error) {
    res.status(400).send("incorrect data");
  }
};
