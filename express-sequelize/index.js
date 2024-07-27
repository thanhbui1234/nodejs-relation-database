import express from "express";
import sequelize from "./database.js";
import User from "./models/user.model.js";
import router from "./routers/index.js";

const app = express();

app.use("", router);

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(`User ${user.username} is created`);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the user");
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    // Update user fields with request body data
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    res.send("updated user");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the user");
  }
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    // Sync all models
    // params force is help refesh colum database
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  console.log("App is running on http://localhost:3000");
});
