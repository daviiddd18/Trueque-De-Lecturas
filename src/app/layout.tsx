import { Inter } from 'next/font/google'
import './styles/globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} antialiased min-h-screen flex flex-col`}>
      <div className='flex-grow'>
        <div className='border p-5'>
          <Navbar />
        </div>
        {children}
      </div>
        <Footer />
    </div>
  )
}
