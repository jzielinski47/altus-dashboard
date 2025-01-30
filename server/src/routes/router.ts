import { Router } from "express";
import usersAuthRouter from "./auth";
import dashboardAPIsRouter from "./dashboard";
import usersRouter from "./users";

const router = Router();

router.use(usersAuthRouter);
router.use(usersRouter);
router.use(dashboardAPIsRouter);

export default router;
