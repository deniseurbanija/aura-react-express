import express, { NextFunction, Request, Response } from "express";
import indexRouter from "./routes/index.router";
import morgan from "morgan";

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

server.use(indexRouter);

export default server;
