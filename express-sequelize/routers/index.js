import { Router } from "express";
import UserRouter from "./UserRouter/index.js";

const router = Router();
router.use("/v1/api/user", UserRouter);
export default router;
