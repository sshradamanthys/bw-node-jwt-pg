import "dotenv/config";
import express from "express";

import usersRouter from "./routes/users.js";
import publicRouter from "./routes/public.js";
import protectedRouter from "./routes/protected.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api/users", usersRouter);
app.use("/", publicRouter);
app.use("/auth", protectedRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
