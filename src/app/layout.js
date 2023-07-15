import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/Context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'skills share',
  description: 'share your skills and improve your performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className={`container` }>
          <ThemeProvider>
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
        </body>
    </html>
  )
}
