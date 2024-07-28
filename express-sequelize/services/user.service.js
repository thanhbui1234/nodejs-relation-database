import User from "../models/user.model.js";

export default class UserService {
  constructor() {}

  static async createUser(body) {
    return await User.create(body);
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUser(userId) {
    return await User.findOne({ where: { id: userId } });
  }

  static async updateUser(userId, body) {
    return await User.update(body, {
      where: { id: userId },
    });
  }

  static async deleteUser(userId) {
    return await User.destroy({ where: { id: userId } });
  }
}
