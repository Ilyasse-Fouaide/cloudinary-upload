const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../tryCatchWrapper");
const path = require("path");

module.exports.upload = tryCatchWrapper(async (req, res, next) => {
  const { image } = req.files;

  // return a string `../public/upload/images/name.jpg`
  const pathName = path.join("../public/upload/images", image.name);

  console.log(pathName);

  res.status(StatusCodes.OK).json({ success: true })
})
