import { Inter } from 'next/font/google'
import './styles/globals.css'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased `}>
        <div className='prueba'>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
