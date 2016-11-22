DROP DATABASE IF EXISTS kiosks;
CREATE DATABASE kiosks;

\c kiosks

CREATE TABLE kiosks (
  id SERIAL PRIMARY KEY,
  kiosk_id VARCHAR(20),
  mall VARCHAR(40),
  city VARCHAR(40),
  state VARCHAR(15),
  zip INT,
  batteries_on_loan INT,
  batteries_to_replace INT,
  battery_count INT,
  online BOOLEAN
)