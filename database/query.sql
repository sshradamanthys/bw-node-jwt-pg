DROP TABLE IF EXISTS users;


CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

/* Create one user */
INSERT INTO users (email, username, password) VALUES ('test@example.com', 'tester01', 'secret');

/* Get all users */
SELECT uid, email, username FROM users;

/* Update a user */
UPDATE users SET email, username WHERE email = $1;

/* Delete a user */
DELETE FROM users WHERE email = $1;