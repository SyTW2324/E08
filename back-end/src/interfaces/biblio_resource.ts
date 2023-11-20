import { genres } from "./resource_genres";

export interface biblio_resource {
  id: number;
  name: string;
  description: string;
  genres: genres[];
  release_date: Date;
}
