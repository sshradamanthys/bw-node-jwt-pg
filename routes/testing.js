import { Router } from "express";
import { TestingController } from "../controllers/testing.js";

const router = Router();

router.get("/", (_, res) => {
  res.json({ message: "GET request received" });
});

router.post("/", TestingController.testingPost);

export default router;
