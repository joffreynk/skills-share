"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

import styles from "@/styles/login.module.css";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();

  const router = useRouter();

  if (session && session.status === "authenticated") {
    router?.push("/dashboard");
  }

  if (session?.status === "loading")
    return <LoadingSpinner title="Skills share is authorizing you" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          minLength={4}
          className={styles.input}
          required
        />
        <button className={styles.btn}>Login</button>
      </form>

      <div className={styles.social}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => signIn("google")}
        >
          Sgn in with Google
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => signIn("github")}
        >
          Sgn in with GitHub
        </button>
      </div>
      <Link className={styles.link} href="/dashboard/register">
        Register to login in without social account{" "}
      </Link>
    </div>
  );
};

export default Login;
