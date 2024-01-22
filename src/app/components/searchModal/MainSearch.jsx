'use client'

import { useState, useEffect } from 'react'
import SearchIcon from '/public/images/searchIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { Noticia_Text } from "next/font/google";
import SearchInstructions from './SearchInstructions'

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

const MainSearch = ({ handleSearchIconClick, isOpen }) => {
  const [query, setQuery] = useState('')
  const [savedQuery, setSavedQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState('')

  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!query) {
      setErrMsg('Please enter a search query. Filter is optional.')
      return
    }
    setErrMsg('')

    try {
      const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()

      setSearchResults([data])
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setSavedQuery(query)
    setQuery('')
    setFilter('')
  }

  const shortenedUrl = 'https://nytimes.com/'

  return (
    <main className={`${noticia.className} fixed top-0 left-0 right-0 bottom-0 z-30 w-screen h-screen bg-blue-100 flex flex-col items-center md:px-[20%] py-24 overflow-scroll  transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className='mb-12 flex flex-col items-center'>
        <h1 className='text-7xl font-bold text-red-400'>NLN</h1>
        <h2 className='text-xl -mt-2 text-neutral-800'>News Link Now</h2>
      </div>
      <section className='flex justify-center'>
        <div onClick={handleSearchIconClick} className='hidden md:fixed top-6 right-10 text-lg md:text-2xl text-white bg-red-600/60 cursor-pointer hover:bg-neutral-500 transition-all duration-300 py-2 px-4 rounded-full'>X</div>
        <div onClick={handleSearchIconClick} className='md:hidden z-999 absolute top-4 right-4 text-lg md:text-2xl text-white bg-red-600/60 cursor-pointer hover:bg-neutral-500 transition-all duration-300 py-2 px-4 rounded-full'>X</div>
        <form onSubmit={handleFormSubmit}>
          <div className='flex flex-col md:flex-row gap-4'>
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
          </div>
          <button className='w-full text-center bg-gray-500 rounded mt-4 px-4 py-2 hover:bg-blue-500 transition-all duration-300'>
            <div className='w-full flex gap-2 items-center justify-center'>
              <Image
                src={SearchIcon}
                alt="Search Icon"
                width={20}
                height={20}
                className=''
              />
              <p className='text-[1.5rem]'>Search</p>
            </div>
          </button>
        </form>
      </section>
      {!errMsg && searchResults.length === 0 && <SearchInstructions />}
      <section className='w-full h-screen flex flex-col mx-auto my-12'>
        {errMsg ? (
          <p className='text-red-500 text-center'>{errMsg}</p>
        ) : searchResults.length > 0 ? (
          searchResults.every(result => result.response.docs.length > 0) ? (
            <Fade direction='right' cascade triggerOnce>
              <h1 className='md:text-2xl text-neutral-800 text-center'>
                Showing results for &quot;<span className='text-red-500'>{savedQuery}</span>&quot;
              </h1>
            </Fade>
          ) : (
            <Fade direction='right' cascade triggerOnce>
              <h1 className='md:text-2xl text-neutral-800 text-center'>
                No results found for &quot;<span className='text-red-500'>{savedQuery}</span>&quot;
              </h1>
            </Fade>
          )
        ) : (
          <>
            <h1 className='fixed z-[-1] top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] tracking-wider font-bold opacity-30 text-blue-200 text-center'>NLN</h1>
            <p className='fixed z-[-1] top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl tracking-wide font-bold opacity-30 text-blue-200 text-center'>News Link Now</p>
          </>
        )}
        {/* Render search results */}
        <div className='w-[92%] mx-auto md:w-full flex justify-center'>
          <div className='flex flex-col my-12'>
            {searchResults.map((articles) => (
              articles.response.docs.map((article, index) => (
                <Fade key={index} direction='up' cascade triggerOnce>
                  <div key={index} className='text-neutral-800'>
                    <div className='md:w-full flex flex-col md:flex-row items-start justify-start gap-10'>
                      {article.multimedia[0]?.url && (
                        <Image
                          src={`${shortenedUrl}${article.multimedia[0].url}`}
                          alt={`${article.headline.main} : ${article.lead_paragraph} : 'topic related`}
                          width={300}
                          height={300}
                          className='rounded-md my-3 w-full max-h-[300px] object-cover'
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
                </Fade>
              ))
            ))}
          </div>
        </div>
      </section>
    </main>


  )
}

export default MainSearch