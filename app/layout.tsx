import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Rahul Raj Singh | Senior Data Engineer',
  description: 'Portfolio website of Rahul Raj Singh - Senior Data Engineer specializing in real-time data platforms, streaming systems, and OLAP at scale',
  keywords: ['Data Engineer', 'Kafka', 'ClickHouse', 'Apache Druid', 'Real-Time Data', 'Redis', 'Data Engineering'],
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
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
