const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../tryCatchWrapper");

module.exports = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ success: true })
});
