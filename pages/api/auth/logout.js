import { supabase } from "../../../utils/initSupabase";

export default async function handler(req, res) {
  await supabase.auth.signOut();
  await res.setHeader(
    "Set-Cookie",
    "sb:token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  );
  res.send({});
}
