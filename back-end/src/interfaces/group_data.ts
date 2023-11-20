import { genres } from "./resource_genres";

export interface group_data {
  group_id: string;
  admin: string;
  genres: genres[];
  mail: string;
}
