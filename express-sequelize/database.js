import { Sequelize } from "sequelize";

// Create a new Sequelize instance, connecting to an SQLite database
const sequelize = new Sequelize("test-db", "chi-thanh", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

export default sequelize;
