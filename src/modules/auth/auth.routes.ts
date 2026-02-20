import { Router } from "express";
import { register, login, refresh, logoutAll } from "./auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout-all", logoutAll);

export default router;