import { Application } from "express";
import { createConnection } from "typeorm";
import "reflect-metadata"
require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");

import dbConfig from "./config/database";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use(errorHandler);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
