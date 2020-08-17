DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_quote_id INTEGER,
  order_status TEXT NOT NULL,
  order_complete BOOLEAN,
  order_kind TEXT NOT NULL
);