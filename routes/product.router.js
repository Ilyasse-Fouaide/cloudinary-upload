const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");

router.route("/products")
  .get(product.index)
  .post(product.create)

module.exports = router
