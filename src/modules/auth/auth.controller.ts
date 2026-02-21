import { Request, Response, NextFunction } from "express";
import {
  registerService,
  loginService,
  refreshService,
  logoutAllService
} from "./auth.service";

import { registerSchema } from "./dto/register.dto";
import { loginSchema } from "./dto/login.dto";
import { AppError } from "../../middleware/error.middleware";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = registerSchema.parse(req.body);
    const user = await registerService(data.email, data.password);
    const { password, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await loginService(
      data.email,
      data.password,
      req.headers["user-agent"],
      req.ip || undefined
    );

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw new AppError("Refresh token is required", 400);

    const tokens = await refreshService(refreshToken);
    res.json(tokens);
  } catch (error) {
    next(error);
  }
};

export const logoutAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body;
    if (!userId) throw new AppError("User ID is required", 400);

    await logoutAllService(userId);
    res.json({ message: "Desconectado de todos os dispositivos com sucesso!" });
  } catch (error) {
    next(error);
  }
};
