import { Request, Response } from "express";
import {
  addUserService,
  getUserByIdService,
  getUsersService,
} from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import { validateCredentialService } from "../services/credential.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersService();
  res.status(200).send(users);
};

export const getUserById = catchAsync(async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = await getUserByIdService(userId);
  res.status(200).send(user);
});

export const addUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const newUser = await addUserService(userData);
  res.status(201).send(newUser);
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const credentialId = await validateCredentialService(username, password);
  const foundUser = await getUserByIdService(credentialId);
  res.status(200).send({ login: true, foundUser });
});
