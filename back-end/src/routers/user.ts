import express from "express";
import { User, UserDocumentInterface } from "../models/user.js";

export const userRouter = express.Router();

// Register a user
userRouter.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    console.log("Trying to register user");
    // Adds the user to the database
    const user = new User({
      ...req.body,
    });
    await user.save();
    console.log("Registered!");
    // Sends the result to the client
    return res.status(201).send({
      messagge: "sign up successful",
      code: 1,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(406)
      .send({ message: "Try an other username", code: 0, error: error });
  }
});

// Log in
userRouter.get("/users", async (req, res) => {
  try {
    console.log("Trying to log in");
    console.log(req.query);
    const userName = req.query.id;
    const password = req.query.password;

    if (!userName || !password) {
      console.log("User or password not provided aborting");
      return res.status(400).send("Need username and password");
    }

    const user = await User.findOne({ id: userName });

    // Sends the result to the client
    if (user && user.password == password) {
      console.log("Login successful");
      return res.status(200).send({ message: "Login successful", code: 1 });
    }
    console.log("Passwotd or ursename invald");
    return res
      .status(401)
      .send({ message: "Invalid username or password", code: 0 });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Updates users by name NOT IMPLEMENTED JUST A TEMPLATE
userRouter.patch("/users", async (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send({
        error: "Se debe proporcionar un nombre",
      });
    }

    // Checks if update is allowed
    const allowedUpdates = ["name", "birth_date", "mail"];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidUpdate) {
      return res.status(400).send({
        error: "Actualización no permitida",
      });
    }

    // Checks if elements from body exist and get previous info

    // Finds the users by name
    const users = await User.find({ full_name: req.query.name.toString() });
    if (users.length !== 0) {
      const updatedUsers: UserDocumentInterface[] = [];
      for (let index = 0; index < users.length; index++) {
        // Updates an user
        const userToUpdate = users[index];
        const updatedUser = await User.findByIdAndUpdate(
          userToUpdate._id,
          {
            ...req.body,
          },
          {
            new: true,
            runValidators: true,
          }
        );

        // Updates the user information in the other collections
      }

      // Sends the result to the client
      return res.send(updatedUsers);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Deletes users by name NOT IMPLEMENTED JUST A TEMPLATE
userRouter.delete("/users", async (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send({
        error: "Se debe proveer el nombre de usuario",
      });
    }

    // Finds the users by name
    const users = await User.find({ full_name: req.query.name.toString() });
    if (users.length !== 0) {
      for (let i = 0; i < users.length; i++) {
        // Deletes an user
        const deletedUser = await User.findByIdAndDelete(users[i]._id);
        if (!deletedUser) return res.status(404).send();
      }
      // Sends the result to the client
      return res.send(users);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});
