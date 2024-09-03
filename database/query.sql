DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
  rid SERIAL PRIMARY KEY,
  NAME VARCHAR(255) NOT NULL UNIQUE CHECK (NAME IN ('admin', 'vet', 'client')),
);

CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL DEFAULT 3,
  FOREIGN KEY (role_id) REFERENCES roles(rid)
);

INSERT INTO roles (NAME) VALUES ('admin'), ('vet'), ('client');

