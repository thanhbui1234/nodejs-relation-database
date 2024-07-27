import UserService from "../services/user.service.js";

class UserController {
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
}
export default new UserController();
