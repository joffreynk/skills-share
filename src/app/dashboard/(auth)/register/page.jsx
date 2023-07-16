import React from 'react'
import styles from '@/styles/register.module.css'
import Link from 'next/link'
const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" name="name" id="name" className={styles.input}required  />
        <input type="email" name="email" id="email" className={styles.input} required />
        <input type="password" name="password" id="password" className={styles.input}required  />
        <button type="submit" className={styles.btn}>Register</button>
      </form>
      <Link href='/dashboard/login' >Login  with other accounts</Link>
    </div>
  )
}

export default Register