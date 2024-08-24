import { Router } from "express";
import { PublicController } from "../controllers/public.js";

const router = Router();

router.post("/register", PublicController.register);

router.post("/login", PublicController.login);

export default router;
