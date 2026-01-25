import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahul Raj Singh | Senior Data Engineer',
  description: 'Portfolio website of Rahul Raj Singh - Data Engineer specializing in scalable data platforms and pipelines',
  keywords: ['Data Engineer', 'Big Data', 'Azure', 'Apache Spark', 'Data Engineering'],
  authors: [{ name: 'Rahul Raj Singh' }],
  openGraph: {
    title: 'Rahul Raj Singh | Senior Data Engineer',
    description: 'Portfolio website of Rahul Raj Singh - Senior Data Engineer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
