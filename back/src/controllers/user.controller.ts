import { Request, Response } from "express";
import {
  addUserService,
  getUserByIdService,
  getUsersService,
  getUserByEmail,
} from "../services/user.service";
import { validateCredentialService } from "../services/credential.service";
import { verifyGoogleToken } from "../config/googleAuth";

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

export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const payload = await verifyGoogleToken(token);

    if (!payload || !payload.email) {
      return res
        .status(401)
        .json({ message: "Invalid Google token or email not provided" });
    }

    let user = await getUserByEmail(payload.email);

    if (!user) {
      user = await addUserService({
        email: payload.email || "",
        name: payload.name || "",
        avatar: payload.picture || "",
        username: "",
        password: "",
        birthdate: "",
        nDni: 0
      });
    }

    // Here you would generate a JWT token or session for the user
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Google authentication failed", error);
    return res.status(500).json({ message: "Authentication failed" });
  }
};
