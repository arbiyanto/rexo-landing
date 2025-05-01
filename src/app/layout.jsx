import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Head from 'next/head'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Rexo',
    default: 'Rexo - Aplikasi Keamanan untuk Bisnis Rental',
  },
  description:
    'Rexo adalah aplikasi yang dirancang untuk memenuhi kebutuhan spesifik bisnis rental dan komunitas rental di Indonesia, meningkatkan keamanan dan kepercayaan dalam ekosistem rental.',
  icons: {
    icon: '/src/images/logo_single.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={clsx('bg-white antialiased', inter.variable)}>
      <head>
        <link rel="icon" href="/src/images/logo_single.png" />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  )
}
