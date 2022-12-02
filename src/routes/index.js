const express = require("express");

const { paymentRouter } = require("./paymentRouter");

const router = express.Router();

router.use("/payments", paymentRouter);

module.exports = { router };
