import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";

const Username = ({ user }) => {
  const [loading, setLoading] = useState(false);

  console.log(user);
  if (loading) return <p>Loading...</p>;
  return <h1>Hello, {user.email}</h1>;
};

export async function getServerSideProps({ req }) {
  const { data, user, error } = await supabase.auth.api.getUserByCookie(req);

  return {
    props: {
      user: user,
    },
  };
}

export default Username;
