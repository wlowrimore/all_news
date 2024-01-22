'use client'

import { useState, useEffect, useRef } from "react"
import Clock from "react-live-clock";
import Image from "next/image";
import Link from "next/link"
import MainSearch from "../searchModal/MainSearch";
import SearchIcon from '/public/images/searchIcon.svg'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [date, setDate] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
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
    setToggleMenu(!toggleMenu)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isNavOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isNavOpen])

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

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <main>
      <div onClick={toggleNav} className='md:hidden flex flex-col items-center pt-2 space-y-1'>
        <div className='w-[5%] h-[0.25rem] bg-neutral-800 rounded-full'></div>
        <div className='w-[10%] h-[0.25rem] bg-neutral-800 rounded-full'></div>
        <div className='w-[5%] h-[0.25rem] bg-neutral-800 rounded-full'></div>
      </div>
      {isNavOpen && (
        <div className='fixed z-20 top-0 left-0 w-full h-full'>
          <h1 onClick={toggleNav} className='fixed top-4 right-4 z-30 text-2xl text-gray-200'>X</h1>
          <nav className='relative flex flex-col w-full h-full justify-between py-2 lg:px-8 xl:px-20 2xl:px-44 text-lg text-white bg-gray-800'>
            <Link href='/' onClick={toggleNav} className='py-2 px-3 transition-all text-2xl tracking-wider text-red-400 hover:bg-gray-700 duration-300'>NLN</Link>

            {/* Common News Dropdown */}
            <div className='text-sm tracking-widest py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('CommonNews')}>Common News</div>
            {activeDropdown === 'CommonNews' && toggleMenu && (
              <div ref={dropdownRef} className='absolute z-10 w-full top-[18%] flex bg-gray-800'>
                <Link href='/world-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>World News</p></Link>
                <Link href='/us-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>U.S. News</p></Link>
                <Link href='/insider-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Insider News</p></Link>
                <Link href='/political-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Political News</p></Link>
              </div>
            )}

            {/* Strategic News Dropdown */}
            <div className='text-sm tracking-widest py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('StrategicNews')}>Strategic News</div>
            {activeDropdown === 'StrategicNews' && toggleMenu && (
              <div ref={dropdownRef} className='absolute z-100 w-full top-[29%] flex bg-gray-800'>
                <Link href='/business-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Business</p></Link>
                <Link href='/realestate-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Real Estate</p></Link>
                <Link href='/tech-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Tech</p></Link>
                <Link href='/science-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300 w-[31.5%]'><p onClick={toggleNav}>Science</p></Link>
              </div>
            )}

            {/* Other News Dropdown */}
            <div className='text-sm tracking-widest py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('OtherNews')}>Other News</div>
            {activeDropdown === 'OtherNews' && toggleMenu && (
              <div ref={dropdownRef} className='absolute z-10 w-full top-[40%] flex bg-gray-800'>
                <Link href='/upshot-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}><p onClick={toggleNav}>Up & Up</p></Link>
                <Link href='/opinion-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300' onClick={() => openDropdown('OtherNews')}><p onClick={toggleNav}>Opinion</p></Link>
                <Link href='/obituaries' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300 w-[55%]' onClick={() => openDropdown('OtherNews')}><p onClick={toggleNav}>In Memoriam</p></Link>
              </div>
            )}

            {/* Arts & Entertainment Dropdown */}
            <div className='text-sm tracking-widest py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('ArtsAndEntertainment')}>Arts & Entertainment</div>
            {activeDropdown === 'ArtsAndEntertainment' && toggleMenu && (
              <div ref={dropdownRef} className='absolute z-10 w-full top-[51%] grid grid-cols-2 bg-gray-800'>
                <Link href='/movie-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Movies</p></Link>
                <Link href='/fashion-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Fashion</p></Link>
                <Link href='/magazine-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Magazine</p></Link>
                <Link href='/t-magazine-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>T Magazine</p></Link>
                <Link href='/theater-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Theater</p></Link>
                <Link href='/arts-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Arts</p></Link>
                <Link href='/literary-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Literature</p></Link>
                <div className='bg-gray-700 w-full'></div>
              </div>
            )}

            {/* Body & Mind Dropdown */}
            <div className='text-sm tracking-widest py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('BodyAndMind')}>Body & Mind</div>
            {activeDropdown === 'BodyAndMind' && toggleMenu && (
              <div ref={dropdownRef} className='absolute z-10 w-full top-[62%] flex bg-gray-800'>
                <Link href='/food-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Food</p></Link>
                <Link href='/health-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300 w-full'><p onClick={toggleNav}>Health</p></Link>
              </div>
            )}

            {/* Special Interests Dropdown */}
            <div className='text-sm tracking-widest py-2 px-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer' onClick={() => openDropdown('SpecialInterests')}>Special Interests</div>
            {activeDropdown === 'SpecialInterests' && toggleMenu && (
              <div ref={dropdownRef} className='absolute z-10 w-full top-[73%] flex bg-gray-800'>
                <Link href='/sports-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300'><p onClick={toggleNav}>Sports</p></Link>
                <Link href='/travel-news' className='text-xs py-2 px-3 transition-all bg-gray-700 duration-300 w-full'><p onClick={toggleNav}>Travel</p></Link>
              </div>
            )}
            <div onClick={handleSearchIconClick} className='flex justify-center space-x-2 py-2 px-4 w-[94%] mt-6 mx-3 transition-all hover:bg-gray-700 duration-300 cursor-pointer rounded-lg bg-blue-400/5'>
              <Image
                src={SearchIcon}
                alt='Search Icon'
                width={24}
                height={24}
                className='cursor-pointer'
              />
              <p className='flex text-lg'>Search for articles</p>
            </div>
            <div className='pt-6 pb-12 text-center'>
              <p className='text-3xl text-neutral-100 tracking-widest'><Clock format='h:mm:ss a' ticking={true} timezone={'US/Central'} noSsr={true} /></p>
              <p className='text-lg text-neutral-100 tracking-widest'>{date}</p>
            </div>
            {isOpen && (
              <MainSearch isOpen={isOpen} handleSearchIconClick={handleSearchIconClick} />
            )}
          </nav>
        </div>
      )}

    </main>
  )
}

export default MobileNav