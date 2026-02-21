import { createUser, findUserByEmail } from "../users/user.repository";
import {
  createSession,
  deleteAllSessions
} from "../sessions/session.repository";
import {
  hashPassword,
  comparePassword,
  hashToken
} from "../../utils/hash";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} from "../../utils/jwt";

import { AppError } from "../../middleware/error.middleware";

export const registerService = async (email: string, password: string) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new AppError("Email already in use", 409);

  const hashed = await hashPassword(password);
  return createUser(email, hashed);
};

export const loginService = async (
  email: string,
  password: string,
  userAgent?: string,
  ip?: string
) => {
  const user = await findUserByEmail(email);
  if (!user) throw new AppError("Invalid email or password", 401);

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new AppError("Invalid email or password", 401);

  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = generateRefreshToken({ userId: user.id });

  const hashedRefresh = await hashToken(refreshToken);

  await createSession(user.id, hashedRefresh, userAgent, ip);

  return { accessToken, refreshToken };
};

export const refreshService = async (token: string) => {
  try {
    const payload = verifyRefreshToken(token) as { userId: string };

    const accessToken = generateAccessToken({ userId: payload.userId });
    const refreshToken = generateRefreshToken({ userId: payload.userId });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new AppError("Invalid or expired refresh token", 401);
  }
};

export const logoutAllService = async (userId: string) => {
  await deleteAllSessions(userId);
};
