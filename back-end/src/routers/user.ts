import express from "express";
import { User, UserDocumentInterface } from "../models/user.js";

export const userRouter = express.Router();

// Adds an user
userRouter.post("/users", async (req, res) => {
  try {
    // Adds the user to the database
    const user = new User({
      ...req.body,
    });
    await user.save();

    // Sends the result to the client
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Gets users by name
userRouter.get("/users", async (req, res) => {
  try {
    // Gets users from the database
    const filter = req.query.name ? { name: req.query.name } : {};
    const users = await User.find(filter);

    // Sends the result to the client
    if (users.length !== 0) {
      return res.send(users);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Gets user by ID
userRouter.get("/users/:id", async (req, res) => {
  try {
    // Gets user from the database
    const filter = req.params.id ? { id: req.params.id.toString() } : {};
    const user = await User.findOne(filter);
    // Sends the result to the client
    if (user) {
      return res.send(user);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Updates users by name
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
    const users = await User.find({ name: req.query.name.toString() });
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

// Updates user by ID
userRouter.patch("/users/:id", async (req, res) => {
  try {
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

    // Updates the user
    const userToUpdate = await User.findOne({ id: req.params.id.toString() });
    const updatedUser = await User.findOneAndUpdate(
      { id: req.params.id },
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // Updates the user information in the other collections
    if (userToUpdate && updatedUser) {
      // Sends the result to the client
      return res.send(updatedUser);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Deletes users by name
userRouter.delete("/users", async (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send({
        error: "Se debe proveer el nombre de usuario",
      });
    }

    // Finds the users by name
    const users = await User.find({ name: req.query.name.toString() });
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

// Deletes user by ID
userRouter.delete("/users/:id", async (req, res) => {
  try {
    // Deletes the user
    const deletedUser = await User.findOneAndDelete({
      id: req.params.id.toString(),
    });

    if (deletedUser) {
      // Deletes the user information in the other collections

      return res.send(deletedUser);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});
