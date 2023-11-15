import { genres } from "../interfaces/resource_genres";
import { GroupChat } from "./groupChat";
import { User } from "./user";

export class Group {
  private group_id: string;
  private name: string;
  private admin: User;
  private genres: genres[];
  private members: User[];
  private group_chat: GroupChat;
  constructor(group_id: string, name: string, admin: User, genres: genres[]) {
    this.group_id = group_id;
    this.name = name;
    this.admin = admin;
    this.genres = genres;
    this.members = [];
    this.group_chat = new GroupChat();
  }
}
