import { Application } from "express";
import "reflect-metadata";
require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");

import AppDataSource from "./config/database";

AppDataSource.initialize()
  .then(async () => {
    const app: Application = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const port = process.env.PORT || 3000;

    app.use(errorHandler);
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((error) => console.log(error));
