-- migrate:up
CREATE TABLE payments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  payment_key VARCHAR(200) NULL,
  order_id VARCHAR(255) NOT NULL,
  order_name VARCHAR(255) NULL,
  total_amount INT NULL,
  status VARCHAR(100) NULL,
  code VARCHAR(100) NULL,
  pg_message VARCHAR(100) NULL,
  method VARCHAR(100) NULL,
  pg_response_status_code VARCHAR(100) NULL,
  pg_response TEXT NULL,
  approved_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  requested_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE payments;