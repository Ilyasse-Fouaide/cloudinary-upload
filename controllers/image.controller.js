const { v2: cloudinary } = require("cloudinary");
const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../tryCatchWrapper");
const path = require("path");
const { badRequestError } = require("../customError");
const fs = require("fs");

// module.exports.upload = tryCatchWrapper(async (req, res, next) => {
//   if (!req.files) {
//     return next(badRequestError("Path `image` is required!."))
//   }

//   const image = req.files.image;

//   if (image.mimetype.split("/")[0] !== "image") {
//     return next(badRequestError(`Invalid file type "${image.name}" provided.`));
//   }

//   if (image.size > 700000) {  // 700kb
//     return next(badRequestError("Image size exceeds the limit of 700kb"));
//   }

//   // return a string `__dirname + ../public/upload/images/name.jpg`
//   const destination = path.join(__dirname, "../public/upload/images", image.name);

//   image.mv(destination, (err) => {
//     if (err) {
//       return next(err)
//     }

//     res.status(StatusCodes.OK).json({
//       success: true, file: `/upload/images/${image.name}`
//     })
//   })
// })

module.exports.upload = tryCatchWrapper(async (req, res, next) => {
  const uploadedImage = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "upload-file"
  });

  fs.unlinkSync(req.files.tempFilePath)

  res.status(StatusCodes.OK).json({
    success: true,
    secure_url: uploadedImage.secure_url
  })
})
