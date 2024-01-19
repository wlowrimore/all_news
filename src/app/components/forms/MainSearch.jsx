'use client'

import { useState, useEffect } from 'react'
import SearchIcon from '/public/images/searchIcon.svg'
import Image from 'next/image'

const MainSearch = ({ SearchedArticles, isOpen, handleSearchIconClick }) => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')

  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!query || !filter) return

    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()

      SearchedArticles = data.response.docs

      setQuery('')
      setFilter('')
    }
    fetchData()
  }

  return (
    <main className='absolute top-0 left-0 right-0 bottom-0 z-20 w-screen h-screen bg-white/90 flex justify-center px-4 py-24'>
      <div onClick={handleSearchIconClick} className='fixed top-6 right-6 text-2xl text-white bg-red-600/60 cursor-pointer hover:bg-neutral-500 transition-all duration-300 py-2 px-4 rounded-full'>X</div>
      <form onSubmit={handleFormSubmit}>
        <div className='flex gap-4'>
          <input
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search by Keyword"
            className='outline-none rounded px-4 py-1 text-neutral-800 placeholder:text-sm border border-black/20 bg-neutral-100'
          />
          <input
            name="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Filter"
            className='outline-none rounded px-4 py-1 text-neutral-800 placeholder:text-sm border border-black/20 bg-neutral-100' />
          <button className='bg-gray-500 rounded px-4 py-2 hover:bg-blue-500 transition-all duration-300'>
            <Image
              src={SearchIcon}
              alt="Search Icon"
              width={20}
              height={20}
              className='w-6'
            />
          </button>
        </div>
      </form>
    </main>
  )
}

export default MainSearch