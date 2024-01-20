'use client'

import { useState, useEffect } from 'react'
import SearchIcon from '/public/images/searchIcon.svg'
import Image from 'next/image'
import Link from 'next/link'

const MainSearch = ({ handleSearchIconClick }) => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!query) return

    try {
      const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()

      setSearchResults([data])
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    // setQuery('')
    // setFilter('')
  }


  console.log(searchResults)
  const shortenedUrl = 'https://nytimes.com/'

  return (
    <main className='fixed top-0 left-0 right-0 bottom-0 z-20 w-screen h-screen bg-blue-100 flex flex-col items-center px-[20%] py-24 overflow-scroll'>
      <section className='flex justify-center'>
        <div onClick={handleSearchIconClick} className='fixed top-6 right-10 text-2xl text-white bg-red-600/60 cursor-pointer hover:bg-neutral-500 transition-all duration-300 py-2 px-4 rounded-full'>X</div>
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
                className=''
              />
            </button>
          </div>
        </form>
      </section>
      <section className='w-full h-screen flex flex-col mx-auto my-12'>
        <h1 className='text-2xl text-neutral-800 text-center'>Showing results for &quot;<span className='text-red-500'>{query}</span>&quot;</h1>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col my-12'>
            {searchResults.map((articles) => (
              articles.response.docs.map((article, index) => (
                <div key={index} className='text-neutral-800'>
                  <div className='w-full flex items-center justify-start gap-10'>
                    {article.multimedia[0]?.url && (
                      <Image
                        src={`${shortenedUrl}${article.multimedia[0].url}`}
                        alt={article.kicker}
                        width={200}
                        height={200}
                        className='rounded-md my-3'
                        priority
                      />
                    )}
                    <div className='flex flex-col mb-4'>
                      <p className='text-start w-full font-bold'>{article.headline.main}</p>
                      <article>{article.lead_paragraph}</article>
                      <Link href={article.web_url} target='_blank' rel='noopener noreferrer'><p className='text-sm text-blue-500 hover:text-neutral-800 hover:underline'>Read the full article</p></Link>
                    </div>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainSearch