import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '月度回响 - Monthly Echo',
  description: '通过仪式感提升心理健康与个人价值感',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className={`font-inter bg-secondary min-h-screen`}>
        {children}
      </body>
    </html>
  )
}