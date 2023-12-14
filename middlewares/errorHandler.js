const errorHandler = (err, req, res, next) => {
  res.status(err.status).json({
    success: false,
    error: {
      message: err.message
    }
  })
}

module.exports = errorHandler
