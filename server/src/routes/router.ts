import { Router } from "express";
import usersRouter from "./users";
import usersAuthRouter from "./auth";
import dashboardAPIsRouter from "./dashboard";

const router = Router();

router.use(usersAuthRouter);
router.use(usersRouter);
router.use(dashboardAPIsRouter);

export default router;
