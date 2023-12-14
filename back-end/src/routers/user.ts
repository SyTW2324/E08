import express from "express";
import { User, UserDocumentInterface } from "../models/user.js";

export const userRouter = express.Router();

import jwt from "jsonwebtoken";

// Register a user
userRouter.post("/singup", async (req, res) => {
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
    const token = jwt.sign({ id: user.id }, "1234", {
      expiresIn: "1h",
    });
    return res.status(201).json({
      messagge: "sign up successful",
      token: token,
      code: 1,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(406)
      .json({ message: "Try an other username", code: 0, error: error });
  }
});

// Log in
userRouter.post("/login", async (req, res) => {
  try {
    console.log("Trying to log in");
    const userName = req.body.id;
    const password = req.body.password;

    if (!userName || !password) {
      console.log("User or password not provided, aborting");
      return res
        .status(400)
        .json({ message: "Need username and password", code: 0 });
    }

    const user = await User.findOne({ id: userName });

    // Sends the result to the client
    if (user && user.password == password) {
      // User authenticated, generate JWT token
      const token = jwt.sign({ id: user.id }, "1234", {
        expiresIn: "1h",
      });

      console.log("Login successful");
      return res
        .status(200)
        .json({ message: "Login successful", code: 1, token, user });
    }

    console.log("Invalid username or password");
    return res
      .status(401)
      .json({ message: "Invalid username or password", code: 0 });
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
