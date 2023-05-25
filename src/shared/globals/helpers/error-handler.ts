import HTTP_STATUS from "http-status-codes";

export interface IErrorResponse {
  message: string;
  statusCode: number;
  status: string;
  serializeErrors(): IError;
}

export interface IError{
  message: string;
  statusCode: number;
  status: string;
}

export abstract class CustomError extends  Error {
  abstract statusCode: number;
  abstract  status: string;

  constructor(message: string) {
    super(message);
  }

  serializeErrors(): IError {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    }
  }
}

export class BadRequestError extends CustomError {
  status: string = "error";
  statusCode: number = HTTP_STATUS.BAD_REQUEST;

  constructor(message: string) {
    super(message);
  }

}

export class NotFoundError extends CustomError {
  status: string = "not found";
  statusCode: number = HTTP_STATUS.NOT_FOUND;

  constructor(message: string) {
    super(message);
  }

}

export class NotAuthorize extends CustomError {
  status: string = "unauthorized";
  statusCode: number = HTTP_STATUS.UNAUTHORIZED;

  constructor(message: string) {
    super(message);
  }

}

export class FileTooLargeError extends CustomError {
  status: string = "File too large. Error.";
  statusCode: number = HTTP_STATUS.REQUEST_TOO_LONG;

  constructor(message: string) {
    super(message);
  }

}

export class ServerError extends CustomError {
  status: string = "server error";
  statusCode: number = HTTP_STATUS.SERVICE_UNAVAILABLE;

  constructor(message: string) {
    super(message);
  }

}

export class JoiRequestValidationError extends CustomError {
  status: string = "error";
  statusCode: number = HTTP_STATUS.BAD_REQUEST;

  constructor(message: string) {
    super(message);
  }

}




