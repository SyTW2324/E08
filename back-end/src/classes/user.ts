import { check_user_data } from "../functions/check_user";
import { user_data } from "../interfaces/user_data";

export class User {
  private user_id: string;
  private full_name: string;
  private birth_date: Date;
  private mail: string;

  constructor(
    user_id: string,
    full_name: string,
    birth_date: Date,
    mail: string
  ) {
    if (!check_user_data(user_id, full_name, birth_date, mail)) {
      throw new Error("ARGUMENT_ERROR");
    }

    this.user_id = user_id;
    this.full_name = full_name;
    this.birth_date = birth_date;
    this.mail = mail;
  }
}
