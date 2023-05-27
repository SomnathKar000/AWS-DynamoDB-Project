require("dotenv").config();
require("express-async-error");

const express = require("express");
const app = express();

app.use(express.json());

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log("Server is listening on " + port));
