import { pool } from "../../config/database";

export const createSession = async (
  userId: string,
  refreshTokenHash: string,
  userAgent?: string,
  ip?: string
) => {
  const result = await pool.query(
    `INSERT INTO sessions (user_id, refresh_token, user_agent, ip_address)
     VALUES ($1,$2,$3,$4) RETURNING *`,
    [userId, refreshTokenHash, userAgent, ip]
  );

  return result.rows[0];
};

export const findSessionByUser = async (userId: string) => {
  const result = await pool.query(
    "SELECT * FROM sessions WHERE user_id = $1",
    [userId]
  );
  return result.rows;
};

export const deleteSession = async (id: string) => {
  await pool.query("DELETE FROM sessions WHERE id = $1", [id]);
};

export const deleteAllSessions = async (userId: string) => {
  await pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);
};