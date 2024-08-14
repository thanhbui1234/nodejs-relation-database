import { InvalidExcappableError } from "../middlewares/erros.middleware.js";
import UserService from "../services/user.service.js";

class UserController {
  createUse = async (req, res) => {
    try {
      console.log(req.body);
      const user = await UserService.createUser(req.body);
      return res.json({
        message: "create users retrieved successfully",
        data: user,
      });
    } catch (error) {
      res.staus(500).json({ message: "Failed to create user", error: error.message });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const user = await UserService.getAllUsers(req);
      return res.send({
        message: "Users retrieved ",
        content: user.rows,
        totalPage : Math.ceil(user.count /req.query.size )
      });
    } catch (error) {
      throw new Error('get fail');
    }
  };

  getUserById = async (req, res,next) => {
    try {
      const id = req.params.id;
      if (isNaN(id)) {
         next (InvalidExcappableError());
      }
      const user = await UserService.getUser(id);
      return res.json({
        message: "User retrieved successfully",
        data: user,
      });
    } catch (error) {
      throw new Error('Failed to get user');
    }
  };

  updateUserByID = async (req, res) => {
    try {

      const user = await UserService.updateUser(req.params.id, req.body);
      if (user[0] === 0) {
        // Sequelize returns an array where the first element is the number of affected rows
        return res
          .status(404)
          .json({ message: "User not found or no changes detected" });
      }
      return res.json({
        message: "update user by id retrieved successfully",
        data: user,
      });
    } catch (error) {
      throw new Error('update user  fail');
    }
  };

  deleteUserById = async (req, res) => {
    try {
      await UserService.deleteUser(req.params.id);
      return res.json({
        message: "Delete users by id retrieved successfully",
      });
    } catch (error) {
      throw new Error('delete user fail');
    }
  };
}
export default new UserController();

// app.patch("/users/:id", async (req, res) => {
//   try {
//     const user =
//       // Update user fields with request body data
//       (user.username = req.body.username);
//     user.email = req.body.email;
//     user.password = req.body.password;
//     await user.save();
//     res.send("updated user");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while updating the user");
//   }
// });
