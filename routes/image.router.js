const express = require("express");
const router = express.Router();
const image = require("../controllers/image.controller");

router.route("/").post(image.upload)

module.exports = router
