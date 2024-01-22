'use client'

import { useState, useEffect, useRef } from "react"
import Clock from "react-live-clock";
import Image from "next/image";
import Link from "next/link"
import MainSearch from "../searchModal/MainSearch";
import SearchIcon from '/public/images/searchIcon.svg'
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [date, setDate] = useState(null);
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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen])

  const handleSearchIconClick = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const currentDate = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    setDate(formattedDate);
  }, [])

  useEffect(() => {
    const currentHours = new Date().getHours();
    if (currentHours === 0) {
      setDate(new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }));
    }
  })

  return (
    <>
      <nav className='hidden w-full md:flex justify-between items-center py-2 lg:px-8 xl:px-20 2xl:px-44 text-lg text-white bg-gray-800'>
        <Link href='/' className='py-2 px-3 transition-all text-2xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>

        {/* Common News Dropdown */}
        <div className='text-xs lg:text-sm xl:text-lg py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('CommonNews')}>Common News</div>
        {activeDropdown === 'CommonNews' && (
          <div ref={dropdownRef} className='absolute z-10 w-[10.6%] 2xl:left-[14.9%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
            <Link href='/world-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>World News</p></Link>
            <Link href='/us-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>U.S. News</p></Link>
            <Link href='/insider-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Insider News</p></Link>
            <Link href='/political-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Political News</p></Link>
          </div>
        )}

        {/* Strategic News Dropdown */}
        <div className='text-xs lg:text-sm xl:text-lg py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('StrategicNews')}>Strategic News</div>
        {activeDropdown === 'StrategicNews' && (
          <div ref={dropdownRef} className='absolute z-10 w-[10.6%] 2xl:left-[24.65%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
            <Link href='/business-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Business</p></Link>
            <Link href='/realestate-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Real Estate</p></Link>
            <Link href='/tech-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Tech</p></Link>
            <Link href='/science-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Science</p></Link>
          </div>
        )}

        {/* Other News Dropdown */}
        <div className='text-xs lg:text-sm xl:text-lg py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('OtherNews')}>Other News</div>
        {activeDropdown === 'OtherNews' && (
          <div ref={dropdownRef} className='absolute z-10 w-[10.6%] 2xl:left-[34.3%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
            <Link href='/upshot-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}>Up & Up</Link>
            <Link href='/opinion-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}>Opinion</Link>
            <Link href='/obituaries' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}>In Memoriam</Link>
          </div>
        )}

        {/* Arts & Entertainment Dropdown */}
        <div className='text-xs lg:text-sm xl:text-lg py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('ArtsAndEntertainment')}>Arts & Entertainment</div>
        {activeDropdown === 'ArtsAndEntertainment' && (
          <div ref={dropdownRef} className='absolute z-10 w-[10.6%] 2xl:left-[42.7%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
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
        <div className='text-xs lg:text-sm xl:text-lg py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('BodyAndMind')}>Body & Mind</div>
        {activeDropdown === 'BodyAndMind' && (
          <div ref={dropdownRef} className='absolute z-10 w-[10.6%] 2xl:right-[34.2%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
            <Link href='/food-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Food</p></Link>
            <Link href='/health-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Health</p></Link>
          </div>
        )}

        {/* Special Interests Dropdown */}
        <div className='text-xs lg:text-sm xl:text-lg py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('SpecialInterests')}>Special Interests</div>
        {activeDropdown === 'SpecialInterests' && (
          <div ref={dropdownRef} className='absolute z-10 w-[10.6%] 2xl:right-[25.4%] ml-[0.20rem] top-[6%] flex flex-col bg-gray-800'>
            <Link href='/sports-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Sports</p></Link>
            <Link href='/travel-news' className='py-2 px-3 transition-all hover:bg-gray-700 duration-300'><p onClick={closeDropdown}>Travel</p></Link>
          </div>
        )}
        <div onClick={handleSearchIconClick} className='flex space-x-1 py-2 lg:py-1 xl:py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer rounded-lg bg-blue-400/30'>
          <Image
            src={SearchIcon}
            alt='Search Icon'
            width={24}
            height={24}
            className='cursor-pointer'
          />
          {/* <p className='hidden md:text-sm'>Search</p> */}
        </div>
        <div className='py-2 px-4 rounded-lg md:text-start lg:text-end'>
          <p className='md:text-xs lg:text-sm text-neutral-100 tracking-widest'><Clock format='h:mm:ss a' ticking={true} timezone={'US/Central'} noSsr={true} /></p>
          <p className='text-xs text-neutral-100 tracking-widest'>{date}</p>
        </div>
        {isOpen && (
          <MainSearch isOpen={isOpen} handleSearchIconClick={handleSearchIconClick} />
        )}
      </nav>
      <MobileNav />
    </>
  )
}

export default Navbar