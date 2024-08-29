import { Router } from "express";
import { PublicController } from "../controllers/public.js";
import path from "path";

const router = Router();

const __dirname = import.meta.dirname;
const viewsPath = path.join(__dirname, "../views");

router.get("/login", (req, res) => {
  res.sendFile(viewsPath + "/login.html");
});

router.get("/register", (req, res) => {
  res.sendFile(viewsPath + "/register.html");
});

router.get("/profile", (req, res) => {
  res.sendFile(viewsPath + "/profile.html");
});

router.post("/register", PublicController.register);

router.post("/login", PublicController.login);

export default router;
