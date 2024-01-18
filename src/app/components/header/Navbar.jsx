'use client'

import { useState } from "react"
import Link from "next/link"
const Navbar = () => {
  const [isCNVisible, setIsCNVisible] = useState(false)
  const [isSNVisible, setIsSNVisible] = useState(false)
  const [isAEVisible, setIsAEVisible] = useState(false)
  const [isBMVisible, setIsBMVisible] = useState(false)

  const handleCNClick = () => {
    setIsCNVisible(!isCNVisible)
  }
  const handleSNClick = () => {
    setIsSNVisible(!isSNVisible)
  }
  const handleAEClick = () => {
    setIsAEVisible(!isAEVisible)
  }
  const handleBMClick = () => {
    setIsBMVisible(!isBMVisible)
  }

  return (
    <nav className='flex justify-between items-center py-2 px-24 text-lg text-white bg-gray-800'>
      <Link href='/' className='py-2 px-3 transition-all text-xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>

      {/* Common News Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={handleCNClick}>Common News</div>
      {isCNVisible && (
        <div className='absolute z-10 w-[10.6%] left-[10%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/world-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleCNClick}>World News</p></Link>
          <Link href='/us-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleCNClick}>U.S. News</p></Link>
          <Link href='/insider-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleCNClick}>Insider News</p></Link>
        </div>
      )}

      {/* Strategic News Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={handleSNClick}>Strategic News</div>
      {isSNVisible && (
        <div className='absolute z-10 w-[10.6%] left-[30%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/business-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleSNClick}>Business</p></Link>
          <Link href='/tech-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleSNClick}>Tech</p></Link>
          <Link href='/science-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleSNClick}>Science</p></Link>
        </div>
      )}

      {/* Arts & Entertainment Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={handleAEClick}>Arts & Entertainment</div>
      {isAEVisible && (
        <div className='absolute z-10 w-[10.6%] left-[45%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/movie-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleAEClick}>Movies</p></Link>
          <Link href='/theater-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleAEClick}>Theater</p></Link>
          <Link href='/arts-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleAEClick}>Arts</p></Link>
          <Link href='/literary-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleAEClick}>Literature</p></Link>
        </div>
      )}

      {/* Body & Mind Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={handleBMClick}>Body & Mind</div>
      {isBMVisible && (
        <div className='absolute z-10 w-[10.6%] left-[60%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/food-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleBMClick}>Food</p></Link>
          <Link href='/health-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={handleBMClick}>Health</p></Link>
        </div>
      )}



      <Link href='/sports-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Sports</Link>
      <Link href='/fashion-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'>Fashion</Link>




    </nav>
  )
}

export default Navbar