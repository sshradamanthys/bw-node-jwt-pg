import { pool } from "../database/connection.js";

const getUsers = async () => {
  try {
    const result = await pool.query(
      "SELECT uid, email, username, role_id FROM users"
    );

    if (result.rows.length === 0) {
      return { message: "No users found" };
    }

    return result.rows;
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};

const getUserSafelyByEmail = async ({ email }) => {
  try {
    const result = await pool.query({
      text: "SELECT uid, email, username, role_id FROM users WHERE email = $1",
      values: [email],
    });

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};

const getUserByEmail = async ({ email }) => {
  try {
    const result = await pool.query({
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    });

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};

const createUser = async ({ email, username, password }) => {
  try {
    const result = await pool.query({
      text: "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING uid, email, username, role_id",
      values: [email, username, password],
    });

    return result.rows[0];
  } catch (error) {
    console.error(error);
    return { message: "Server error" };
  }
};

export const UserModel = {
  getUsers,
  getUserByEmail,
  getUserSafelyByEmail,
  createUser,
};
