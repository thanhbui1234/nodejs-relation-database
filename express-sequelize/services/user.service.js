import User from "../models/user.model.js";

export default class UserService {
  constructor() {}

  static async getAllUsers() {
    return await User.findAll();
  }
}
