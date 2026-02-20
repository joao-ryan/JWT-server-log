"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAllService = exports.refreshService = exports.loginService = exports.registerService = void 0;
const user_repository_1 = require("../users/user.repository");
const session_repository_1 = require("../sessions/session.repository");
const hash_1 = require("../../utils/hash");
const jwt_1 = require("../../utils/jwt");
const registerService = async (email, password) => {
    const hashed = await (0, hash_1.hashPassword)(password);
    return (0, user_repository_1.createUser)(email, hashed);
};
exports.registerService = registerService;
const loginService = async (email, password, userAgent, ip) => {
    const user = await (0, user_repository_1.findUserByEmail)(email);
    if (!user)
        throw new Error("Invalid credentials");
    const valid = await (0, hash_1.comparePassword)(password, user.password);
    if (!valid)
        throw new Error("Invalid credentials");
    const accessToken = (0, jwt_1.generateAccessToken)({ userId: user.id });
    const refreshToken = (0, jwt_1.generateRefreshToken)({ userId: user.id });
    const hashedRefresh = await (0, hash_1.hashToken)(refreshToken);
    await (0, session_repository_1.createSession)(user.id, hashedRefresh, userAgent, ip);
    return { accessToken, refreshToken };
};
exports.loginService = loginService;
const refreshService = async (token) => {
    const payload = (0, jwt_1.verifyRefreshToken)(token);
    const accessToken = (0, jwt_1.generateAccessToken)({ userId: payload.userId });
    const refreshToken = (0, jwt_1.generateRefreshToken)({ userId: payload.userId });
    return { accessToken, refreshToken };
};
exports.refreshService = refreshService;
const logoutAllService = async (userId) => {
    await (0, session_repository_1.deleteAllSessions)(userId);
};
exports.logoutAllService = logoutAllService;
