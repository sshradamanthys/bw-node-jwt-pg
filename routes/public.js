import { Router } from "express";
import { PublicController } from "../controllers/public.js";
import { UserController } from "../controllers/users.js";
import { TestingController } from "../controllers/testing.js";

const router = Router();

router.get("/login", PublicController.loginView);

router.get("/register", PublicController.registerView);

router.get("/profile", PublicController.profileView);

router.get("/testing", PublicController.testingView);

router.post("/register", UserController.register);

router.post("/login", UserController.login);
// router.post("/login", TestingController.testingPost);1

export default router;
