import './globals.scss'
import React from 'react'
import { Prompt } from 'next/font/google'
import { NextAuthProvider } from './providers'
import LayoutProvider from './layoutProvider'
const inter = Prompt({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Template CMS',
  description: 'Content management system with next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='th'>
      <body className={inter.className}>
        <NextAuthProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
