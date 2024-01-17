'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Earth from '/public/images/earth.webp'
import { Noticia_Text } from "next/font/google";

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const WorldNews = () => {
  const [worldArticles, setWorldArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setWorldArticles(data.results)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='relative w-full'>
        <Image
          src={Earth}
          alt='Earth'
          className='w-52 opacity-80'
          priority
          placeholder='blur'
        />
        <h1 className={`${noticia.className} absolute bottom-24 left-16 text-3xl 2xl:text-7xl`}>World News</h1>
        <h2 className={`${noticia.className} absolute bottom-16 left-16 text-2xl 2xl:text-3xl`}>See what&apos;s happening around the globe</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {worldArticles?.map((worldArticle, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            {worldArticle.multimedia && worldArticle.multimedia.length > 0 && (
              <Image
                src={worldArticle.multimedia[0].url}
                alt={worldArticle.multimedia[0].caption}
                width={worldArticle.multimedia[0].width}
                height={worldArticle.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full'
                priority
              />
            )}
            <p className='text-sm italic'>Published on:&nbsp;<span>{new Date(worldArticle.published_date).toLocaleDateString()}</span></p>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>{worldArticle.title}</h2>
              <p className='text-gray-600'>{worldArticle.abstract}</p>
              <Link href={worldArticle.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default WorldNews