import express from "express";
import { Book, BookDocumentInterface } from "../models/book.js";

export const bookRouter = express.Router();

bookRouter.post("/books", async (req, res) => {
  try {
    // Adds book to the database
    const book = new Book({
      ...req.body,
    });
    await book.save();
    return res.status(201).json({ message: "Successfuly added book", book });
  } catch(error) {
    return res
      .status(406).json({ message: "Try another book", code: 0, error: error });
  }
});

bookRouter.patch("/books/:id", async (req, res) => {
  try {
    // Use req.params.id to get the book ID from the route parameters
    const bookId = req.params.id;

    // Checks if update is allowed
    const allowedUpdates = ["description", "genres"];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      return res.status(400).send({
        message: "Update not permitted",
      });
    }
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({message: "Book not found"});
    }

    return res.status(200).json({message: "Book successfuly updated", updatedBook});
  } catch(error) {
    return res.status(500).send(error);
  }
});

bookRouter.delete("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book successfuly deleted", deletedBook });
  } catch (error) {
    return res.status(500).send(error);
  }
});