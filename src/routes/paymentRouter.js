const express = require("express");

const paymentRouter = express.Router();

const paymentController = require("../controllers/paymentController");

paymentRouter.post("", paymentController.createPaymentHistory);
paymentRouter.get("/payment", paymentController.getPaymentHistory);

module.exports = { paymentRouter };
