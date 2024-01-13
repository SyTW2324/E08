import express from "express";
import { Book } from "../models/book.js";

export const bookRouter = express.Router();

bookRouter.post("/books", async (req, res) => {
  try {
    const { id,
      description,
      book_name,
      author,
      genres,
      release_year,
      editorial,
      bookcover } = req.body;

    // Validate required fields
    if (!id || !author || !description || !book_name || !genres || !release_year || !editorial || !bookcover) {
      return res.status(400).send({ message: "All are required fields" });
    }
    const book = new Book({
      id,
      description,
      book_name,
      author,
      genres,
      release_year,
      editorial,
      bookcover,
    });

    await book.save();
    return res.status(201).send({ message: "Successfully added book", book });
  } catch (error) {
    console.error("Error adding book:", error);
    return res.status(406).send({ message: "Try another book", code: 0 });
  }
});

bookRouter.patch("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;

    // Validate at least one valid field is being updated
    const allowedUpdates = ["description", "genres"];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.some((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      return res.status(400).json({ message: "At least one valid field is required for update" });
    }

    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body);

    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found", code: 0});
    }

    return res.status(200).send({ message: "Book successfully updated", updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

bookRouter.delete("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book successfully deleted", deletedBook });
  } catch (error) {
    console.error("Error deleting book:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});
