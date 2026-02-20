"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAll = exports.refresh = exports.login = exports.register = void 0;
const auth_service_1 = require("./auth.service");
const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await (0, auth_service_1.registerService)(email, password);
    res.json(user);
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await (0, auth_service_1.loginService)(email, password, req.headers["user-agent"], req.ip);
    res.json(result);
};
exports.login = login;
const refresh = async (req, res) => {
    const { refreshToken } = req.body;
    const tokens = await (0, auth_service_1.refreshService)(refreshToken);
    res.json(tokens);
};
exports.refresh = refresh;
const logoutAll = async (req, res) => {
    const { userId } = req.body;
    await (0, auth_service_1.logoutAllService)(userId);
    res.json({ message: "Logged out from all devices" });
};
exports.logoutAll = logoutAll;
