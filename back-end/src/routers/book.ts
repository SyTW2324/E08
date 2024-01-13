import express from "express";
import { Book, BookDocumentInterface } from "../models/book.js";

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
    if (!req.query.id) {
      return res.status(400).send({
        message: "A id must be provided",
        code: 0
      });
    }
    const allowedUpdates = ["description", "genres"];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.some((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      return res.status(400).json({ message: "At least one valid field is required for update" });
    }

    const books = await Book.find({ id: req.query.id.toString() });
    if (books.length !== 0) {
      const updatedBook: BookDocumentInterface[] = [];
      for (let index = 0; index < books.length; index++) {
        // Updates a book
        const bookToUpdate = books[index];
        const updatedBook = await Book.findByIdAndUpdate(
          bookToUpdate._id,
          {
            ...req.body,
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // Sends the result to the client
      return res.status(201);
    }
    return res.status(404).send({
      message: "User not found",
      code: 0
    });
  } catch (error) {
    console.error("Error updating book:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

bookRouter.delete("/books/:id", async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).send({
        message: "A id must be provided",
        code: 0
      });
    }
    const books = await Book.find({ id: req.query.id.toString() });
    if (books.length !== 0) {
      for (let i = 0; i < books.length; i++) {
        // Deletes an book
        const deletedBook= await Book.findByIdAndDelete(books[i]._id);
      }
      // Sends the result to the client
      return res.status(200).send({
        message: "Book deleted"
      });
    }
    return res.status(404).send({ message: "Book not found" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});
