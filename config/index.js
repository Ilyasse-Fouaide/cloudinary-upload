const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  "APP_PORT": process.env.APP_PORT,
  "DB_URI": process.env.DB_URI,
  "CLOUD_NAME": process.env.CLOUD_NAME,
  "CLOUD_API_KEY": process.env.CLOUD_API_KEY,
  "CLOUD_API_SECRET": process.env.CLOUD_API_SECRET,
}
