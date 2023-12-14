const express = require("express");
const config = require("./config");
const productRouter = require("./routes/product.router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use("/api/v1", productRouter);
app.use(notFound);
app.use(errorHandler);

const port = config.APP_PORT || 5001;

const start = () => {
  try {
    app.listen(port, () => console.log(`listening to the port ${port}...`))
  } catch (error) {
    throw new Error(error.message);
  }
}

start()
