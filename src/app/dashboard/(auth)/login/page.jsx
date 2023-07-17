'use client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

import styles from '@/styles/login.module.css'

const Login = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();

    
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder='example@gmail.com' className={styles.input} required />
        <input type="password" name="password" id="password" placeholder='password' minLength={4} className={styles.input}required  />
        <button  className={styles.btn}>Register</button>
      </form>

      <div>
      <button className={styles.btn} type="button" onClick={()=> signIn('google')}>Sgn in with Google</button>
      <button className={styles.btn} type="button" onClick={()=> signIn('github')}>Sgn in with GitHub</button>
      <button className={styles.btn} onClick={() => signOut()}>Sign out</button>
      <Link href='/dashboard/register' >Login  with other accounts</Link>
      </div>
    </div>
  )
}

export default Login
