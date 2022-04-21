import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/initSupabase";
import styles from "../styles/Login.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(supabase.auth.user() || null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("auth state changed");
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

    console.log(user);

    if (user) {
      router.push("/");
    }
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
    <div className={`${styles.container} col-10`}>
      <h1 className={styles.title}>Login</h1>
      <form className="form-container">
        <div className="input-container">
          <label className="form-label" htmlFor="email">
            E-post
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="me@example.com"
            className="form-control"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="password">
            Lösenord
          </label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="********"
              className="form-control"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <IoMdEyeOff
                color="#23449B"
                size="24px"
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <IoMdEye
                color="#23449B"
                size="24px"
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <button
          className={styles.submit + " btn btn-primary"}
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Logga in
        </button>
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
          <button
            className={styles.loginMethodBtn + " btn"}
            onClick={() =>
              supabase.auth.signIn(
                { provider: "google" },
                { redirectTo: "/login" }
              )
            }
          >
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
