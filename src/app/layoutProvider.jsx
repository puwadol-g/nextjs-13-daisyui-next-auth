'use client'
import React from 'react'
import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'
export default function LayoutProvider({ children }) {
  const { data, status } = useSession()
  if (status === 'loading') return 'loading...'
  return data ? (
    <Layout>
      <main className='container min-h-screen items-center justify-between p-12 pt-24'>
        {children}
      </main>
    </Layout>
  ) : (
    <>{children}</>
  )
}
