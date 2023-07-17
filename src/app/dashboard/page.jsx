'use client'

import {  getSession, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  const session = useSession()

  console.log('====================================');
  console.log(session);
  console.log('====================================');
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard