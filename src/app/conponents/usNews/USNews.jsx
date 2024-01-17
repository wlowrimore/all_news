'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import USFlag from '/public/images/usFlag_sky.webp'
import { Noticia_Text } from "next/font/google";

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const USNews = () => {
  const [usArticles, setUSArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setUSArticles(data.results)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='relative bg-gray-300 mx-4 mb-2 rounded shadow-md shadow-gray-400'>
        <Image
          src={USFlag}
          alt='USFlag'
          className='w-full h-[15rem] object-cover opacity-60 rounded-sm'
          priority
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        />
        <h1 className={`${noticia.className} absolute bottom-24 left-8 text-3xl 2xl:text-7xl`}>U.S. News</h1>
        <h2 className={`${noticia.className} absolute bottom-16 left-8 text-2xl 2xl:text-3xl`}>Your country. Your news. Your right to know.</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {usArticles?.map((usArticle, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            {usArticle.multimedia && usArticle.multimedia.length > 0 && (
              <Image
                src={usArticle.multimedia[0].url}
                alt={usArticle.multimedia[0].caption}
                width={usArticle.multimedia[0].width}
                height={usArticle.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full transition-all duration-500 hover:scale-105'
                priority
              />
            )}
            <p className='text-xs italic'>{usArticle.byline.replace('By', '').trim()}&nbsp;<span>{new Date(usArticle.published_date).toLocaleDateString()}</span></p>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>{usArticle.title}</h2>
              <p className='text-gray-600'>{usArticle.abstract}</p>
              <Link href={usArticle.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default USNews