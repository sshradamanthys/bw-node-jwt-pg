import { Router } from "express";
import { getAll, getOneByEmail } from "../controllers/users.js";

const router = Router();

router.get("/", getAll);

router.get("/:email", getOneByEmail);

export default router;
