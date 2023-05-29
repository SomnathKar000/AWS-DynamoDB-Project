require("dotenv").config();
require("express-async-error");
const userRouter = require("./routes/user-router");
const notFoundHandler = require("./middlewares/notfound-handler");
const errorHandler = require("./middlewares/error-handler");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.use(errorHandler);
app.use(notFoundHandler);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log("Server is listening on " + port));
