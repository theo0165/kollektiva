import { supabase } from "../../../utils/initSupabase";

//Set auth cookies after login
export default async function handler(req, res) {
  await supabase.auth.api.setAuthCookie(req, res);
}
