import { pool } from "../database/connection.js";
import crypto from "crypto";

export const getUsers = async () => {
  try {
    const result = await pool.query("SELECT uid, email, username FROM users");

    if (result.rows.length === 0) {
      return { message: "No users found" };
    }

    return result.rows;
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};

export const getUserByEmail = async ({ email }) => {
  try {
    const result = await pool.query({
      text: "SELECT uid, email, username FROM users WHERE email = $1",
      values: [email],
    });

    if (result.rows.length === 0) {
      return { message: "User not found" };
    }

    return result.rows[0];
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};

export const createUser = async ({ email, username, password }) => {
  try {
    const result = await pool.query({
      text: "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING uid, email, username",
      values: [email, username, password],
    });

    return result.rows[0];
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};
