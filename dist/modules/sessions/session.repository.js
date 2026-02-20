"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllSessions = exports.deleteSession = exports.findSessionByUser = exports.createSession = void 0;
const database_1 = require("../../config/database");
const createSession = async (userId, refreshTokenHash, userAgent, ip) => {
    const result = await database_1.pool.query(`INSERT INTO sessions (user_id, refresh_token, user_agent, ip_address)
     VALUES ($1,$2,$3,$4) RETURNING *`, [userId, refreshTokenHash, userAgent, ip]);
    return result.rows[0];
};
exports.createSession = createSession;
const findSessionByUser = async (userId) => {
    const result = await database_1.pool.query("SELECT * FROM sessions WHERE user_id = $1", [userId]);
    return result.rows;
};
exports.findSessionByUser = findSessionByUser;
const deleteSession = async (id) => {
    await database_1.pool.query("DELETE FROM sessions WHERE id = $1", [id]);
};
exports.deleteSession = deleteSession;
const deleteAllSessions = async (userId) => {
    await database_1.pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);
};
exports.deleteAllSessions = deleteAllSessions;
