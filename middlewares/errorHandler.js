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

  if (err.error && err.error.errno === -3008 && err.error.code === "ENOTFOUND") {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: `Something wrong with ${err.error.hostname}, check your network`
      }
    })
  }

  res.status(500).json({ err: err })
}

module.exports = errorHandler
