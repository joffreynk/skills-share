'use client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

import styles from '@/styles/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} type="button" onClick={()=> signIn('google')}>Sgn in with Google</button>
      <button className={styles.btn} type="button" onClick={()=> signIn('github')}>Sgn in with GitHub</button>
      <button className={styles.btn} onClick={() => signOut()}>Sign out</button>
      <Link href='/dashboard/register' >Login  with other accounts</Link>
    </div>
  )
}

export default Login
