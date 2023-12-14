const { StatusCodes } = require("http-status-codes")

class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status
  }
}

const badRequestError = (message) => {
  return new CustomError(message, StatusCodes.BAD_REQUEST)
}

const notFoundError = (message) => {
  return new CustomError(message, StatusCodes.NOT_FOUND)
}

module.exports = {
  badRequestError,
  notFoundError
}
