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

  const { user, error } = await supabase.auth.signIn({ email, password });

  if (error) {
    res.status(400).json({
      code: 400,
      error: error.message,
    });

    return;
  }

  //await supabase.auth.api.setAuthCookie(req, res);

  res.json({ code: 200, user });
}
