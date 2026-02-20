import { Request, Response } from "express";
import {
  registerService,
  loginService,
  refreshService,
  logoutAllService
} from "./auth.service";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await registerService(email, password);
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await loginService(
    email,
    password,
    req.headers["user-agent"],
    req.ip
  );

  res.json(result);
};

export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  const tokens = await refreshService(refreshToken);
  res.json(tokens);
};

export const logoutAll = async (req: Request, res: Response) => {
  const { userId } = req.body;
  await logoutAllService(userId);
  res.json({ message: "Logged out from all devices" });
};