import { Book, BookDocumentInterface } from "../models/book.js";

const defaultBook = {
  id: 1,
  description: "aaa",
  book_name: "1984",
  author: "George Orwell",
  genres: [" a ", " a "],
  release_year: 1949,
  editorial: "DEBOLSILLO",
  bookcover: "../src/assets/bookcovers/1984_bookcover.jpg",
};

await new Book(defaultBook).save();
