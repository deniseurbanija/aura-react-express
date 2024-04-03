import { Request, Response } from "express";

export const getAppointments = async (req:Request, res: Response) =>{
    res.send("appointments")
} 

export const getAppointment = async (req:Request, res: Response) =>{
    res.send("appointment")
}

export const addAppointment = async (req:Request, res: Response) =>{
    res.send("appointment added")
}

export const cancelAppointment = async (req:Request, res: Response) =>{
    res.send("appointment canceled")
}