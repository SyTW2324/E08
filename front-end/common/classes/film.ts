import { Resource } from "./resource";

export class Film extends Resource {
  private movie_name: string;
  private director: string;
  private main_actors: string[];
  private release_year: number;
  private genres: string[];
  private age_restriction: number;

  constructor(
    movie_name: string,
    director: string,
    main_actors: string[],
    release_year: number,
    genres: string[],
    description: string,
    age_restriction: number
  ) {
    super(movie_name, description);
  }
}
