import { Router } from "express";
import UserController from "../../controllers/user.controller.js";
const router = Router();

router.route("/").get(UserController.getAllUsers);
router
  .route("/:id")
  .get(UserController.getUserById)
  .delete(UserController.deleteUserById)
  .patch(UserController.updateUserByID);

export default router;
