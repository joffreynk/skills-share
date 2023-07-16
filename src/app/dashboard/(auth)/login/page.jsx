'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
      <button type="button" onClick={()=> signIn('google')}>Sgn in with Google</button>
      <button type="button" onClick={()=> signIn('github')}>Sgn in with GitHub</button>
    </div>
  )
}

export default Login
