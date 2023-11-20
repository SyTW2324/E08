import { Resource } from "./resource";

export class Book extends Resource {
  private book_name: string;
  private author: string;
  private genres: string[];
  private release_year: number;
  private editorial: string;

  constructor(
    book_name: string,
    author: string,
    genres: string[],
    release_year: number,
    editorial: string,
    description: string
  ) {
    super(book_name, description);
  }
}
