import { check_user_data } from "../assets/functions/check_user";
import { user_data } from "../interfaces/user_data";

class User implements user_data {
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
      throw new Error("User data input error");
    }
  }
}
