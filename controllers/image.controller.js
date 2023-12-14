const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../tryCatchWrapper");
const path = require("path");
const { badRequestError } = require("../customError");

module.exports.upload = tryCatchWrapper(async (req, res, next) => {
  if (!req.files) {
    return next(badRequestError("Path `image` is required!."))
  }

  const image = req.files.image;

  if (!image.mimetype.slit("/")[0] === "image") {
    return next(badRequestError(`Invalid file type "${image.name}" provided.`));
  }

  // return a string `__dirname + ../public/upload/images/name.jpg`
  const destination = path.join(__dirname, "../public/upload/images", image.name);

  image.mv(destination, (err) => {
    if (err) {
      return next(err)
    }

    res.status(StatusCodes.OK).json({
      success: true, file: `/upload/images/${image.name}`
    })
  })
})
