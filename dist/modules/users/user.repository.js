"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.findUserByEmail = exports.createUser = void 0;
const database_1 = require("../../config/database");
const createUser = async (email, password) => {
    const result = await database_1.pool.query("INSERT INTO users (email, password) VALUES ($1,$2) RETURNING *", [email, password]);
    return result.rows[0];
};
exports.createUser = createUser;
const findUserByEmail = async (email) => {
    const result = await database_1.pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
};
exports.findUserByEmail = findUserByEmail;
const findUserById = async (id) => {
    const result = await database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};
exports.findUserById = findUserById;
