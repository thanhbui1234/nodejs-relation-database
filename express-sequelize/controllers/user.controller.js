import UserService from "../services/user.service.js";

class UserController {
  createUse = async (req, res) => {
    try {
      const user = await UserService.createUser(req.body);
      return res.json({
        message: "create users retri`eved successfully",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const user = await UserService.getAllUsers();
      return res.json({
        message: "Users retrieved successfully",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getUserById = async (req, res) => {
    try {
      const user = await UserService.getUser(req.params.id);
      return res.json({
        message: "Users by id retrieved successfully",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateUserByID = async (req, res) => {
    try {
      console.log("Updating user with ID:", req.params.id);
      console.log("Update data:", req.body);
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
      console.log(error);
    }
  };

  deleteUserById = async (req, res) => {
    try {
      await UserService.deleteUser(req.params.id);
      return res.json({
        message: "Delete users by id retrieved successfully",
      });
    } catch (error) {
      console.log(error);
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
