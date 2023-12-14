const express = require("express");
const config = require("./config");
const productRouter = require("./routes/product.router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const connect = require("./db")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", productRouter);
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
