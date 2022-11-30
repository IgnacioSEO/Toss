require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { routes } = require("./src/routes/index");

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan("combined"));

  app.use(routes);

  return app;
};

module.exports = { createApp };
