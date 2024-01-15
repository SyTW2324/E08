import express from "express";
import { Book, BookDocumentInterface } from "../models/book.js";

interface book_response {
  id: number;
  description: string;
  book_name: string;
  author: string;
  genres: string[];
  release_year: number;
  editorial: string;
  bookcover: string;
}

export const bookRouter = express.Router();

bookRouter.get("/books", async (req, res) => {
  try {
    const filter = req.query.id ? { id: req.query.id } : {};
    const books = await Book.find(filter);
    if (books != undefined) {
      let books_info: book_response[] = [];
      books.forEach((book) => {
        books_info.push({
          id: book.id,
          book_name: book.book_name,
          description: book.description,
          author: book.author,
          release_year: book.release_year,
          genres: book.genres,
          bookcover: book.bookcover,
          editorial: book.editorial,
        });
      });

      return res
        .status(201)
        .send({ message: "List with books", data: books_info });
    } else {
      return res.status(404).send({ message: "No books available" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Server Error" });
  }
});

bookRouter.post("/books", async (req, res) => {
  try {
    const {
      id,
      description,
      book_name,
      author,
      genres,
      release_year,
      editorial,
      bookcover,
    } = req.body;

    // Validate required fields
    if (
      !id ||
      !author ||
      !description ||
      !book_name ||
      !genres ||
      !release_year ||
      !editorial ||
      !bookcover
    ) {
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

    if (!bookId) {
      return res.status(400).json({
        message: "A valid book ID must be provided",
        code: 0,
      });
    }

    const allowedUpdates = ["description", "genres"];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.some((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      return res
        .status(400)
        .json({ message: "At least one valid field is required for update" });
    }

    const books = await Book.find({ id: bookId });

    if (books.length !== 0) {
      const updatedBooks: BookDocumentInterface[] = [];

      for (let index = 0; index < books.length; index++) {
        const bookToUpdate = books[index];
        const updatedBook = await Book.findByIdAndUpdate(
          bookToUpdate._id,
          { ...req.body },
          { new: true, runValidators: true }
        );

        if (updatedBook) {
          updatedBooks.push(updatedBook);
        }
      }

      return res.status(200).json({
        message: "Book successfully updated",
        updatedBooks,
      });
    }

    return res.status(404).json({
      message: "Book not found",
      code: 0,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

bookRouter.delete("/books/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({
        message: "A id must be provided",
        code: 0,
      });
    }
    const books = await Book.find({ id: req.params.id });
    if (books.length !== 0) {
      for (let i = 0; i < books.length; i++) {
        // Deletes an book
        const deletedBook = await Book.findByIdAndDelete(books[i]._id);
      }
      // Sends the result to the client
      return res.status(200).send({
        message: "Book successfully deleted",
      });
    }
    return res.status(404).send({ message: "Book not found" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});
