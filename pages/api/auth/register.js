import { supabase } from "../../../utils/initSupabase.js";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

export default async function handler(req, res) {
  const email = req.body.email ?? "";
  const password = req.body.password ?? "";

  const errors = [];

  if (!isEmail(email)) {
    //invalid email
    errors.push("invalid email");
  }

  if (isEmpty(password) || password.length < 8) {
    //empty password
    errors.push("invalid password");
  }

  if (errors.length > 0) {
    res.status(400).json({
      code: 400,
      errors,
    });

    return;
  }

  let { user, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    errors.push(error.message);

    res.status(401).json({
      code: 401,
      errors,
    });

    return;
  }

  res.json(user);
}
