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

export const registerService = async (email: string, password: string) => {
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
  if (!user) throw new Error("Invalid credentials");

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = generateRefreshToken({ userId: user.id });

  const hashedRefresh = await hashToken(refreshToken);

  await createSession(user.id, hashedRefresh, userAgent, ip);

  return { accessToken, refreshToken };
};

export const refreshService = async (token: string) => {
  const payload = verifyRefreshToken(token) as any;

  const accessToken = generateAccessToken({ userId: payload.userId });
  const refreshToken = generateRefreshToken({ userId: payload.userId });

  return { accessToken, refreshToken };
};

export const logoutAllService = async (userId: string) => {
  await deleteAllSessions(userId);
};