import { Router } from "express";
import { getAll, getOneByEmail, createOne } from "../controllers/users.js";

const router = Router();

router.get("/", getAll);

router.get("/:email", getOneByEmail);

router.post("/", createOne);

export default router;
