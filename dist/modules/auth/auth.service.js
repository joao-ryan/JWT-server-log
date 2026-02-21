"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAllService = exports.refreshService = exports.loginService = exports.registerService = void 0;
const user_repository_1 = require("../users/user.repository");
const session_repository_1 = require("../sessions/session.repository");
const hash_1 = require("../../utils/hash");
const jwt_1 = require("../../utils/jwt");
const error_middleware_1 = require("../../middleware/error.middleware");
const registerService = async (email, password) => {
    const existingUser = await (0, user_repository_1.findUserByEmail)(email);
    if (existingUser)
        throw new error_middleware_1.AppError("Email already in use", 409);
    const hashed = await (0, hash_1.hashPassword)(password);
    return (0, user_repository_1.createUser)(email, hashed);
};
exports.registerService = registerService;
const loginService = async (email, password, userAgent, ip) => {
    const user = await (0, user_repository_1.findUserByEmail)(email);
    if (!user)
        throw new error_middleware_1.AppError("Invalid email or password", 401);
    const valid = await (0, hash_1.comparePassword)(password, user.password);
    if (!valid)
        throw new error_middleware_1.AppError("Invalid email or password", 401);
    const accessToken = (0, jwt_1.generateAccessToken)({ userId: user.id });
    const refreshToken = (0, jwt_1.generateRefreshToken)({ userId: user.id });
    const hashedRefresh = await (0, hash_1.hashToken)(refreshToken);
    await (0, session_repository_1.createSession)(user.id, hashedRefresh, userAgent, ip);
    return { accessToken, refreshToken };
};
exports.loginService = loginService;
const refreshService = async (token) => {
    try {
        const payload = (0, jwt_1.verifyRefreshToken)(token);
        const accessToken = (0, jwt_1.generateAccessToken)({ userId: payload.userId });
        const refreshToken = (0, jwt_1.generateRefreshToken)({ userId: payload.userId });
        return { accessToken, refreshToken };
    }
    catch (error) {
        throw new error_middleware_1.AppError("Invalid or expired refresh token", 401);
    }
};
exports.refreshService = refreshService;
const logoutAllService = async (userId) => {
    await (0, session_repository_1.deleteAllSessions)(userId);
};
exports.logoutAllService = logoutAllService;
