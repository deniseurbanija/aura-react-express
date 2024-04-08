import { NextFunction, Request, Response } from "express";

const catchAsync = (controller: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch((error) => next(error));
  };
};

export default catchAsync;
