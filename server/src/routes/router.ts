import { Router } from "express";
import usersRouter from "./users";

const router = Router();

router.use(usersRouter);

export default router;
