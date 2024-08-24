import { Router } from "express";
import { ProtectedController } from "../controllers/protected.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = Router();

router.get("/profile", verifyToken, ProtectedController.profile);

export default router;
