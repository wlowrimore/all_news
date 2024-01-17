'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import USFlag from '/public/images/usFlag_sky.webp'
import { Noticia_Text } from "next/font/google";

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const MovieNews = () => {
  const [moviesArticles, setMoviesArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setMoviesArticles(data.results)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className={`${noticia.className} 2xl:text-5xl px-4 pb-2`}>Movie News</h1>
      <h2 className={`${noticia.className} 2xl:text-3xl px-4`}>See what&apos;s happening on the silver screen</h2>
      {moviesArticles[0]?.multimedia && moviesArticles[0].multimedia.length > 0 && (
        <Link href={moviesArticles[0].url} target='_blank' rel='noopenernoreferrer' className='transition-all duration-300 hover:opacity-90'>
          <div className='relative bg-gray-900 rounded-lg m-4 h-[33rem]'>
            <Image
              src={moviesArticles[0].multimedia[0].url}
              alt={moviesArticles[0].multimedia[0].caption}
              width={moviesArticles[0].multimedia[0].width}
              height={moviesArticles[0].multimedia[0].height}
              className='rounded-lg shadow-sm shadow-gray-500 w-full h-full object-cover opacity-60'
              priority
            />
            <div className='absolute bottom-3 left-3 flex flex-col w-1/2 text-white bg-gray-800/90 p-4 rounded-lg'>
              <h3 className='font-bold text-2xl'>{moviesArticles[0].title}</h3>
              <p>{moviesArticles[0].abstract}</p>
            </div>
          </div>
        </Link>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {moviesArticles?.map((moviesArticles, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            {moviesArticles.multimedia && moviesArticles.multimedia.length > 0 && (
              <Image
                src={moviesArticles.multimedia[0].url}
                alt={moviesArticles.multimedia[0].caption}
                width={moviesArticles.multimedia[0].width}
                height={moviesArticles.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full transition-all duration-500 hover:scale-105'
                priority
              />
            )}
            <p className='text-xs italic'>{moviesArticles.byline.replace('By', '').trim()}&nbsp;<span>{new Date(moviesArticles.published_date).toLocaleDateString()}</span></p>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>{moviesArticles.title}</h2>
              <p className='text-gray-600'>{moviesArticles.abstract}</p>
              <Link href={moviesArticles.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieNews