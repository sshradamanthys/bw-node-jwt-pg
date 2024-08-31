import { Router } from "express";
import { PublicController } from "../controllers/public.js";
import { UserController } from "../controllers/users.js";

const router = Router();

router.get("/login", PublicController.loginView);

router.get("/register", PublicController.registerView);

router.get("/profile", PublicController.profileView);

router.post("/register", UserController.register);

router.post("/login", UserController.login);

export default router;
