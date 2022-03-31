import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";

export default function Login() {
  const [user, setUser] = useState(supabase.auth.user() || null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      let newUser = supabase.auth.user();
      if (newUser) {
        await fetch("/api/auth/set", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        });
      }

      setUser(supabase.auth.user() || null);
    });
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const login = await supabase.auth.signIn({ email, password });

      if (login.error) {
        setLoginError("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      await supabase.auth.signOut();
      await fetch("/api/auth/remove", {
        method: "POST",
        credentials: "same-origin",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {!user && (
        <form>
          {loginError && <p>{loginError}</p>}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Login
          </button>
        </form>
      )}

      {user && (
        <>
          <h1>Hello {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
