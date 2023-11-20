export function check_user_data(
  user_id: string,
  full_name: string,
  birth_date: Date,
  mail: string
): boolean {
  const user_id_check = /^[A-Za-z0-9]*$/.test(user_id);
  const full_name_check = /^[A-Za-z\s]+/.test(full_name);
  const mail_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(
    mail
  );

  return user_id_check && full_name_check && mail_check;
}
