'use client'

import React, { useState } from 'react'
import styles from '@/styles/register.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LoadingSpinner from "@/components/LoadingSpinner";
import { useSession } from "next-auth/react";


const Register = () => {
  const [error, setError] = useState(false)
  const router  = useRouter()
  const session = useSession();
  if (session && session.status === "authenticated") {
    router?.push("/dashboard");
  }

  if (session?.status === "loading")
    return <LoadingSpinner title="Skills share is authorizing you" />;

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        'contentType': 'application/json',
        body: JSON.stringify({name, email, password})
      });
      error && setError(false);
      res.ok && router.push('/dashboard/login/?message=Account successfully registered')
    } catch (error) {
      e.target[2].value = '';
      setError(true)
    }

  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder='John Doe' minLength={2} className={styles.input}required  />
        <input type="email" name="email" id="email" placeholder='example@gmail.com' className={styles.input} required />
        <input type="password" name="password" id="password" placeholder='password' minLength={4} className={styles.input}required  />
        <button  className={styles.btn}>Register</button>
        {error && (<p>check your input data!</p>)}
      </form>
      <Link className={styles.link} href='/dashboard/login' >Login  with an existing account</Link>
    </div>
  )
}

export default Register