"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAll = exports.refresh = exports.login = exports.register = void 0;
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const error_middleware_1 = require("../../middleware/error.middleware");
const register = async (req, res, next) => {
    try {
        const data = register_dto_1.registerSchema.parse(req.body);
        const user = await (0, auth_service_1.registerService)(data.email, data.password);
        const { password, ...userWithoutPassword } = user;
        res.status(201).json(userWithoutPassword);
    }
    catch (error) {
        next(error);
    }
};
exports.register = register;
const login = async (req, res, next) => {
    try {
        const data = login_dto_1.loginSchema.parse(req.body);
        const result = await (0, auth_service_1.loginService)(data.email, data.password, req.headers["user-agent"], req.ip || undefined);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            throw new error_middleware_1.AppError("Refresh token is required", 400);
        const tokens = await (0, auth_service_1.refreshService)(refreshToken);
        res.json(tokens);
    }
    catch (error) {
        next(error);
    }
};
exports.refresh = refresh;
const logoutAll = async (req, res, next) => {
    try {
        const { userId } = req.body;
        if (!userId)
            throw new error_middleware_1.AppError("User ID is required", 400);
        await (0, auth_service_1.logoutAllService)(userId);
        res.json({ message: "Logged out from all devices" });
    }
    catch (error) {
        next(error);
    }
};
exports.logoutAll = logoutAll;
