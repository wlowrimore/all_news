'use client'

import Link from "next/link"
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-2 px-24 text-lg text-white bg-gray-800'>
      <Link href='/' className='py-2 px-3 transition-all text-xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>
      <Link href='/world-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>World News</Link>
      <Link href='/us-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>US News</Link>
      <Link href='/sports-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Sports</Link>
      <Link href='/movie-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Movies</Link>
      <Link href='/theater-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Theater</Link>
      <Link href='/arts-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Arts</Link>
      <Link href='/books-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Literature</Link>
      <Link href='/tech-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Technology</Link>
      <Link href='/science-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Science</Link>
      <Link href='/food-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Food</Link>
      <Link href='/health-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Health</Link>
    </nav>
  )
}

export default Navbar