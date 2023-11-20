import { Message } from "./message";

export class GroupChat {
  static id_generator = 0;
  private group_chat_id: number;
  chat: Message[];
  constructor() {
    this.group_chat_id = 0; //PLACE HOLDER
    this.chat = [];
  }
}
