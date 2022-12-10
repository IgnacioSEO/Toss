const paymentDao = require("../models/paymentDao");
const axios = require("axios");

const createPaymentHistory = async (orderId, paymentKey, amount) => {
  return await paymentDao.createPaymentHistory(orderId, paymentKey, amount);
};
const getPaymentHistory = async () => {
  return await axios.get("https://api.tosspayments.com/v1/payments/orders/QIZBXKZ_q7aV5k63nFbOt", {
    headers: {
      Authorization: `Basic ${process.env.SECRET_KEY}`,
    },
  });
};

module.exports = {
  createPaymentHistory,
  getPaymentHistory,
};
