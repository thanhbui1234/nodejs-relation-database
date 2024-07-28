import pkg from "sequelize";
const { Model, DataTypes } = pkg;
import sequelize from "../database.js";

class User extends Model {}

// Initialize the 'User' table
User.init(
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false, // You can set this to true if you want createdAt and updatedAt fields
  }
);

export default User;
