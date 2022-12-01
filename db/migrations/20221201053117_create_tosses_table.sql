-- migrate:up
CREATE TABLE tosses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, 
    payment_key VARCHAR(255) NULL,
    order_id INT NOT NULL,
    status VARCHAR(255) NULL, 
    code VARCHAR(255) NULL,
    pg_message VARCHAR(255) NULL,
    method VARCHAR(255) NULL,
    pg_response_status_code VARCHAR(255) NULL,
    pg_response TEXT(2000) NULL,
    approved_at TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    requested_at TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP
);
-- migrate:down
DROP TABLE tosses;