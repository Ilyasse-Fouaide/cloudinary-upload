const { StatusCodes } = require("http-status-codes");
const tryCatchWrapper = require("../tryCatchWrapper");
const Product = require("../models/product.model");

module.exports.index = tryCatchWrapper(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ success: true })
});

module.exports.create = tryCatchWrapper(async (req, res, next) => {
  const { name, price, image } = req.body;

  await Product.create({ name, price, image });

  res.status(StatusCodes.OK).json({ success: true })
});
