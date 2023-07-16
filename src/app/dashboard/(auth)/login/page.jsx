'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

import styles from '@/styles/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={()=> signIn('google')}>Sgn in with Google</button>
      <button type="button" onClick={()=> signIn('github')}>Sgn in with GitHub</button>
      <Link href='/dashboard/register' >Login  with other accounts</Link>
    </div>
  )
}

export default Login
