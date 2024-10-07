import { Router } from "express";
import usersRouter from "./users";
import usersAuthRouter from "./usersAuth";

const router = Router();

router.use(usersAuthRouter);
router.use(usersRouter);

export default router;
