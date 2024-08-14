import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export class InvalidExcappableError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = "InvalidExcappableError";
  }};


const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  
  return res.status(400).send({
    message: err.message,
    timeStamps: Date.now(),
    path : req.originalUrl,
  })
  // const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  // const msg = err.message || "something went wrong, try again later";
  // res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
