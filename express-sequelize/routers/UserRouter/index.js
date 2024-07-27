import { Router } from "express";
import UserController from "../../controllers/user.controller.js";
const router = Router();

router.route("/").get(UserController.getAllUsers);
export default router;
