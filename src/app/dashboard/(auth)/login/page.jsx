'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div >
      <button type="button" onClick={()=> signIn('google')}>Sgn in with Google</button>
      <button type="button" onClick={()=> signIn('github')}>Sgn in with GitHub</button>
      <Link href='/dashboard/register' >Login  with other accounts</Link>
    </div>
  )
}

export default Login
