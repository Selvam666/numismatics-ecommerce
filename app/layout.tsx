import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NumisStore - Rare Coins & Collectibles',
  description: 'Discover and collect rare numismatic treasures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16 bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
}