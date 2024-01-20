'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image";
import Link from "next/link"
import MainSearch from "../forms/MainSearch";
import SearchIcon from '/public/images/searchIcon.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openDropdown = (dropdownName) => {
    setActiveDropdown(dropdownName);
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const handleSearchIconClick = () => {
    setIsOpen(!isOpen);
  }

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <nav className='flex justify-between items-center py-2 px-44 text-lg text-white bg-gray-800'>
      <Link href='/' className='py-2 px-3 transition-all text-2xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>

      {/* Common News Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('CommonNews')}>Common News</div>
      {activeDropdown === 'CommonNews' && (
        <div ref={dropdownRef} className='absolute z-10 w-[10.6%] left-[10%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/world-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>World News</p></Link>
          <Link href='/us-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>U.S. News</p></Link>
          <Link href='/insider-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Insider News</p></Link>
          <Link href='/political-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Political News</p></Link>
        </div>
      )}

      {/* Strategic News Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('StrategicNews')}>Strategic News</div>
      {activeDropdown === 'StrategicNews' && (
        <div ref={dropdownRef} className='absolute z-10 w-[10.6%] left-[30%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/business-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Business</p></Link>
          <Link href='/realestate-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Real Estate</p></Link>
          <Link href='/tech-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Tech</p></Link>
          <Link href='/science-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Science</p></Link>
        </div>
      )}

      {/* Other News Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('OtherNews')}>Other News</div>
      {activeDropdown === 'OtherNews' && (
        <div ref={dropdownRef} className='absolute z-10 w-[10.6%] right-[1%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/upshot-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}>Up & Up</Link>
          <Link href='/opinion-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}>Opinion</Link>
          <Link href='/obituaries' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}>In Memoriam</Link>
        </div>
      )}

      {/* Arts & Entertainment Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('ArtsAndEntertainment')}>Arts & Entertainment</div>
      {activeDropdown === 'ArtsAndEntertainment' && (
        <div ref={dropdownRef} className='absolute z-10 w-[10.6%] left-[45%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/movie-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Movies</p></Link>
          <Link href='/fashion-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Fashion</p></Link>
          <Link href='/magazine-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Magazine</p></Link>
          <Link href='/t-magazine-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>T Magazine</p></Link>
          <Link href='/theater-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Theater</p></Link>
          <Link href='/arts-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Arts</p></Link>
          <Link href='/literary-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Literature</p></Link>
        </div>
      )}

      {/* Body & Mind Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('BodyAndMind')}>Body & Mind</div>
      {activeDropdown === 'BodyAndMind' && (
        <div ref={dropdownRef} className='absolute z-10 w-[10.6%] left-[60%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/food-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Food</p></Link>
          <Link href='/health-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Health</p></Link>
        </div>
      )}

      {/* Special Interests Dropdown */}
      <div className='py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('SpecialInterests')}>Special Interests</div>
      {activeDropdown === 'SpecialInterests' && (
        <div ref={dropdownRef} className='absolute z-10 w-[10.6%] right-[15%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
          <Link href='/sports-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Sports</p></Link>
          <Link href='/travel-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Travel</p></Link>
        </div>
      )}
      <div onClick={handleSearchIconClick} className='flex space-x-1 py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer rounded-lg bg-blue-400/30'>
        <Image
          src={SearchIcon}
          alt='Search Icon'
          width={24}
          height={24}
          className='cursor-pointer'
        />
        <p className='text-sm'>Search</p>
      </div>
      {isOpen && (
        <MainSearch isOpen={isOpen} handleSearchIconClick={handleSearchIconClick} />
      )}
    </nav>
  )
}

export default Navbar