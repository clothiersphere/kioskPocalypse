DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users

CREATE TABLE users (
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  password VARCHAR(25),
  email VARCHAR(40) UNIQUE, 
  zip INT,
  profile_photo VARCHAR(200)
)