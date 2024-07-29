import { Router } from "express";
import UserController from "../../controllers/user.controller.js";
import catchAsync from "../../middlewares/catchAsync.mileware.js";
const router = Router();

router
  .route("/")
  .get(catchAsync(UserController.getAllUsers))
  .post(catchAsync(UserController.createUse));
router
  .route("/:id")
  .get(catchAsync(UserController.getUserById))
  .delete(catchAsync(UserController.deleteUserById))
  .patch(catchAsync(UserController.updateUserByID));

export default router;
