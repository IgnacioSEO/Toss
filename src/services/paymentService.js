const paymentDao = require("../models/paymentDao");

const createPaymentHistory = async (userId, orderId, orderName, totalAmount) => {
  return await paymentDao.createPaymentHistory(userId, orderId, orderName, totalAmount);
};
const getPaymentHistory = async (userId) => {
  return await paymentDao.getPaymentHistory(userId);
};

module.exports = {
  createPaymentHistory,
  getPaymentHistory,
};
