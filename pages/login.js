import Header from "../components/Header";
import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";
import styles from "../styles/Login.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
      <Header />
      <form className="form-container">
        <div className="input-container">
          <label className="form-label">E-post</label>
          <input
            type="email"
            placeholder="me@example.com"
            className="form-control"
          />
        </div>
        <div className="input-container">
          <label className="form-label">Lösenord</label>
          <input
            type="password"
            placeholder="********"
            className="form-control"
          />
        </div>
        <button className={styles.submit + " btn btn-primary"}>Logga in</button>
      </form>
      <a href="#" className={styles.forgotLink}>
        Glömt lösenord?
      </a>
      <div>
        <p className={styles.center}>Eller logga in med:</p>
        <div className={styles.loginMethods}>
          <button className={styles.loginMethodBtn + " btn"}>
            <FaFacebook color="#23449b" size="25px" />
            Facebook
          </button>
          <button className={styles.loginMethodBtn + " btn"}>
            <FcGoogle size="25px" />
            Google
          </button>
        </div>
      </div>
      <div className={styles.createAccountCta}>
        <p>Första gången här? Kom igång!</p>
        <button className="btn">Skapa konto</button>
      </div>
    </div>
  );
}

/*

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
*/
