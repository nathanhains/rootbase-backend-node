require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
