import User from "../models/user.model.js";

export default class UserService {
  constructor() {}

  static async createUser(body) {
    return await User.create(body);
  }

  static async getAllUsers(req) {
//  logicn pagination 
  // i want check if use  qury param is a random string or not number is db
  const { page, size } = req.query;

    let  perPage = 0;
    let  pageSize = 10;

    if(!Number(isNaN(page)) && page > 0) {
      perPage = page;
    }
    if(!Number(isNaN(size)) && size > 0 && size <10) {
      pageSize = size;
    }
      return await User.findAndCountAll({
        limit: pageSize,
        offset: perPage * pageSize,
      });
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
