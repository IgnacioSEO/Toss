const { appDataSource } = require("./dataSource");

const createPaymentHistory = async (userId, orderId, orderName, totalAmount) => {
  const result = await appDataSource.query(
    `
      INSERT INTO payments
      (
        user_id,
        order_id,
        order_name,
        total_amount
      )
      VALUES
      (
        ?,
        ?, 
        ?, 
        ?
      );
    `,
    [userId, orderId, orderName, totalAmount]
  );

  return result;
};

const getPaymentHistory = async (userId) => {
  const result = await appDataSource.query(
    `
      SELECT
      (
        p.user_id,
        p.order_id,
        p.order_name,
        p.total_ammount
      FROM payments p
      WHERE p.user_id = ?
      )   
    `,
    [userId]
  );

  return result;
};

module.exports = {
  createPaymentHistory,
  getPaymentHistory,
};
