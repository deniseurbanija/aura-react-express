import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) =>{
    res.send("Obtener el listado de todos los usuarios")
}

export const getUserById = async (req: Request, res: Response) =>{
    res.send("Obtener el detalle de un usuario específico")
}

export const addUser = async (req: Request, res: Response) =>{
    res.send("Registro de un nuevo usuario")
}

export const login = async (req: Request, res: Response) => {
    res.send("Login del usuario a la aplicación")
}