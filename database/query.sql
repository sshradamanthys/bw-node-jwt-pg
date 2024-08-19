DROP TABLE IF EXISTS users;


CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  USERNAME VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);


INSERT INTO users (email, username, password) VALUES ('test@example.com', 'tester01', 'secret');

SELECT * FROM users;