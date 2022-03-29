import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";

export default function Login({ session }) {
  // const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = async (email, password) => {
  //   try {
  //     setLoading(true);
  //     const
  //   } catch (error) {

  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // if(loading) return <p>Loading...</p>;

  console.log(supabase.auth.session());

  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
