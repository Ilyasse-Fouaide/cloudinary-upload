const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  "APP_PORT": process.env.APP_PORT,
  "DB_URI": process.env.DB_URI,
}
