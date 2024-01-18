'use client'

import Link from "next/link"
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-2 px-24 text-lg text-white bg-gray-800'>
      <Link href='/' className='py-2 px-3 transition-all text-xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>
      <Link href='/world-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>World News</Link>
      <Link href='/us-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>US News</Link>
      <Link href='/sports-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Sports News</Link>
      <Link href='/movie-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Movie News</Link>
      <Link href='/tech-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Tech News</Link>
      <Link href='/science-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Science News</Link>
    </nav>
  )
}

export default Navbar