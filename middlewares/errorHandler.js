const { StatusCodes } = require("http-status-codes");
const { CustomError } = require("../customError");

const errorHandler = (err, req, res, next) => {
  if (err.name && err.name === "ValidationError") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: {
        status: StatusCodes.BAD_REQUEST,
        message: Object.values(err.errors).map(({ path, message }) => {
          return { [path]: message }
        })
      }
    })
  }

  if (err instanceof CustomError) {
    return res.status(err.status).json({
      success: false,
      error: {
        status: err.status,
        message: err.message
      }
    })
  }

  res.status(500).json({
    success: false,
    err
  })
}

module.exports = errorHandler
