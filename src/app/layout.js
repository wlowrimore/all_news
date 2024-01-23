import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/header/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'News Link Now',
  description: 'Get up-to-date news from the New York Times. Search for anything from a specific person to a specific topic.  Be sure to use the filter field to narrow down your search for a more focused result.',
  keywords: 'New York Times, News, Search, Filter, News Link Now, Insider News, Food News, Health News, Tech News, Sports News, Opinion News, World News, Food, Health, Tech, Sports, Opinion, World, Insider, Search, Filter, News Link Now, 2023',
  author: 'William Lowrimore, News Link Now, 2023, https://news-link-now.vercel.app, https://github.com/wlowrimore, fakenamedev, @wlowrimore, wlowrimore',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  themeColor: '#fff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} min-h-screen w-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
