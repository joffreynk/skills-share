import React from 'react'
import styles from '@/styles/register.module.css'
import Link from 'next/link'
const Register = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form}>
        <input type="text" name="name" id="name" placeholder='John Doe' className={styles.input}required  />
        <input type="email" name="email" id="email" placeholder='example@gmail.com' className={styles.input} required />
        <input type="password" name="password" id="password" placeholder='password' className={styles.input}required  />
        <button type="submit" className={styles.btn}>Register</button>
      </form>
      <Link className={styles.link} href='/dashboard/login' >Login  with other accounts</Link>
    </div>
  )
}

export default Register