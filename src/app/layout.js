import NavBar from '@/components/NavBar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'skills share',
  description: 'share your skills and improve your performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='container'>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
