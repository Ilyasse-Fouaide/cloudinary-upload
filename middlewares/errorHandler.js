const { CustomError } = require("../customError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      success: false,
      error: {
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
