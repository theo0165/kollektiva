import { supabase } from "../../utils/initSupabase";

export default async function handler(req, res) {
  await supabase.auth.signOut();
}
