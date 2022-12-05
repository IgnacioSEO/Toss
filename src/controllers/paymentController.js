const paymentService = require("../services/paymentService");

const createPaymentHistory = async (req, res) => {
  const { userId, orderId, orderName, totalAmount } = req.body;

  await paymentService.createPaymentHistory(userId, orderId, orderName, totalAmount);

  return res.status(201).json({ message: "SUCCESS" });
};

const getPaymentHistory = async (req, res) => {
  const { userId } = req.body;

  await paymentService.getPaymentHistory(userId);

  return res.status(200).json({ data: payments });
};

module.exports = { createPaymentHistory, getPaymentHistory };
