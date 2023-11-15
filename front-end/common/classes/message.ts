import { User } from "./user";

export class Message {
  private message_id: number;
  private author: User;
  private publish_date: Date;
  private content: string;

  constructor(author: User, content: string) {
    this.message_id = 0; //PLACEHOLDER
    this.author = author;
    this.content = content;
    this.publish_date = new Date();
  }
}
