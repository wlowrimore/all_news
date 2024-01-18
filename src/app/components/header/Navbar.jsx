'use client'

import { useState } from "react"
import Link from "next/link"
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className='flex justify-between items-center py-2 px-24 text-lg text-white bg-gray-800'>
      <Link href='/' className='py-2 px-3 transition-all text-xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>
      <Link href='/world-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>World News</Link>
      <Link href='/us-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>US News</Link>
      <Link href='/sports-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Sports</Link>
      <Link href='/fashion-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Fashion</Link>

      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={handleClick}>Arts & Entertainment</div>
      {isVisible && (
        <div className='absolute z-10 w-[10.6%] left-[45%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/movie-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleClick}>Movies</p></Link>
          <Link href='/theater-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleClick}>Theater</p></Link>
          <Link href='/arts-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleClick}>Arts</p></Link>
          <Link href='/literary-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleClick}>Literature</p></Link>
        </div>
      )}


      <Link href='/business-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Business</Link>
      <Link href='/tech-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Technology</Link>
      <Link href='/science-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Science</Link>
      <Link href='/food-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Food</Link>
      <Link href='/health-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Health</Link>
    </nav>
  )
}

export default Navbar