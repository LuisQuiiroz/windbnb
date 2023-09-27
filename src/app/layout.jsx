import Navigation from '../components/Navigation'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montse = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Windbnb',
  description: 'Find a place to stay'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${montse.className}`}>
        <Navigation />
        <main className='container mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
