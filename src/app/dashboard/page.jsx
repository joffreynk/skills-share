'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import {  getSession, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  if(session?.status === 'loading' ) return <LoadingSpinner title='Skills share is autherizing you' />
  if(session?.status === 'unauthenticated' ) {
    router?.push('/dashboard/login')
    return
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard