const express = require("express");
const config = require("./config");

const app = express();

const port = config.APP_PORT || 5001;

const start = () => {
  try {
    app.listen(port, () => console.log(`listening to the port ${port}...`))
  } catch (error) {
    throw new Error(error.message);
  }
}

start()
