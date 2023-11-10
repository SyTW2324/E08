import { resourse_genres } from "./resource_genres";

export interface biblio_resource {
  id: number;
  name: string;
  description: string;
  genres: resourse_genres[];
  release_date: Date;
}
