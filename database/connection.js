import "dotenv/config";

import pg from "pg";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  allowExitOnIdle: true,
  connectionString,
});

try {
  await pool.query("SELECT NOW()");
  console.log("database connected");
} catch (error) {
  console.error("error connecting to the database", error);
}
