import { Router } from "express";
import { UserController } from "../controllers/users.js";

const router = Router();

router.get("/", UserController.getAll);

router.get("/:email", UserController.getOneByEmail);

export default router;
