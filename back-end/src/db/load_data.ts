import { Book, BookDocumentInterface } from "../models/book.js";

const book_1984 = {
  id: 1,
  description: "aaa",
  book_name: "1984",
  author: "George Orwell",
  genres: [" a ", " a "],
  release_year: 1949,
  editorial: "DEBOLSILLO",
  bookcover: "../src/assets/bookcovers/1984_bookcover.jpg",
};

await new Book(book_1984).save();

const book_Alicia = {
  id: 2,
  description: "aaa",
  book_name: "Alicia en el País de las Maravillas",
  author: "Lewis Carroll",
  genres: [" a ", " a "],
  release_year: 1865,
  editorial: "Gibraudo",
  bookcover: "../src/assets/bookcovers/Alicia_bookcover.jpg",
};

await new Book(book_Alicia).save();

const book_AnaFrank = {
  id: 3,
  description: "aaa",
  book_name: "1947",
  author: "Ana Frank",
  genres: [" a ", " a "],
  release_year: 1949,
  editorial: "Publimexi",
  bookcover: "../src/assets/bookcovers/AnaFrank_bookcover.jpg",
};

await new Book(book_AnaFrank).save();

const book_CodigoDaVinci = {
  id: 4,
  description: "aaa",
  book_name: "El Codigo Da Vinci",
  author: "Dan Brown",
  genres: [" a ", " a "],
  release_year: 2003,
  editorial: "Planeta Internacional",
  bookcover: "../src/assets/bookcovers/CodigoDaVinci_bookcover.jpg",
};

await new Book(book_CodigoDaVinci).save();

const book_ElPrincipito = {
  id: 5,
  description: "aaa",
  book_name: "El Principito",
  author: "Antoine de Saint-Exupéry",
  genres: [" a ", " a "],
  release_year: 1943,
  editorial: "Salamandra",
  bookcover: "../src/assets/bookcovers/ElPrincipito_bookcover.jpg",
};

await new Book(book_ElPrincipito).save();

const book_Hobbit = {
  id: 6,
  description: "aaa",
  book_name: "El Hobbit",
  author: "J.R.R Tolkein",
  genres: [" a ", " a "],
  release_year: 1937,
  editorial: "Minotauro",
  bookcover: "../src/assets/bookcovers/Hobbit_bookcover.jpg",
};

await new Book(book_Hobbit).save();

const book_MobyDick = {
  id: 7,
  description: "aaa",
  book_name: "Moby Dick",
  author: "Herman Melville",
  genres: [" a ", " a "],
  release_year: 1851,
  editorial: "Alianza editorial",
  bookcover: "../src/assets/bookcovers/MobyDick_bookcover.jpeg",
};

await new Book(book_MobyDick).save();

const book_SombraHueso = {
  id: 8,
  description: "aaa",
  book_name: "Sombra y Hueso",
  author: "Leigh Bardugo",
  genres: [" a ", " a "],
  release_year: 2012,
  editorial: "Hidra",
  bookcover: "../src/assets/bookcovers/SombraHueso_bookcover.jpg",
};

await new Book(book_SombraHueso).save();

const book_TodoLoQNuncaFuimos = {
  id: 9,
  description: "aaa",
  book_name: "Todo lo que nunca fuimos",
  author: "Alice Kellen",
  genres: [" a ", " a "],
  release_year: 2019,
  editorial: "Planeta",
  bookcover: "../src/assets/bookcovers/TodoLoQNuncaFuimos_bookcover.jpg",
};

await new Book(book_TodoLoQNuncaFuimos).save();