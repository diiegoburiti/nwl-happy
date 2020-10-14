import { ErrorRequestHandler, json } from "express";

const errorHandler: ErrorRequestHandler = (request, error, response, next) => {
  console.error(error);

  return response.status(500).json({ message: "internal server error" });
};

export default errorHandler;
