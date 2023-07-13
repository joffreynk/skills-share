import NavBar from '@/components/NavBar'
import './globals.css'
// import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'

// const inter = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'skills share',
  description: 'share your skills and improve your performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className={`container` }>
          <NavBar />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  )
}
