const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../tryCatchWrapper");
const path = require("path");
const { badRequestError } = require("../customError");

module.exports.upload = tryCatchWrapper(async (req, res, next) => {
  const { image } = req.files;

  // return a string `../public/upload/images/name.jpg`
  const destination = path.join(__dirname, "../public/upload/images", image.name);

  image.mv(destination, (err) => {
    if (err) {
      return next(err)
    }

    res.status(StatusCodes.OK).json({ success: true })
  })
})
