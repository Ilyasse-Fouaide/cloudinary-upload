const express = require("express");
const config = require("./config");
const productRouter = require("./routes/product.router");
const imageRouter = require("./routes/image.router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const connect = require("./db")
const fileUpload = require("express-fileupload")

const app = express();

app.use(fileUpload())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/products", productRouter);
app.use("/api/v1/images", imageRouter);
app.use(notFound);
app.use(errorHandler);

const port = config.APP_PORT || 5001;

const start = async () => {
  try {
    await connect(config.DB_URI);
    app.listen(port, () => console.log(`listening to the port ${port}...`))
  } catch (error) {
    throw new Error(error.message);
  }
}

start()
