'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Noticia_Text } from "next/font/google";

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const ScienceNews = () => {
  const [scienceArticles, setScienceArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setScienceArticles(data.results)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className={`${noticia.className} 2xl:text-5xl px-4 pb-2`}>Science News</h1>
      <h2 className={`${noticia.className} 2xl:text-3xl px-4`}>The wonderful world of science</h2>
      {scienceArticles[0]?.multimedia && scienceArticles[0].multimedia.length > 0 && (
        <Link href={scienceArticles[0].url} target='_blank' rel='noopenernoreferrer' className='transition-all duration-300 hover:opacity-90'>
          <div className='relative bg-gray-900 rounded-lg m-4 h-[33rem]'>
            <Image
              src={scienceArticles[0].multimedia[0].url}
              alt={scienceArticles[0].multimedia[0].caption}
              width={scienceArticles[0].multimedia[0].width}
              height={scienceArticles[0].multimedia[0].height}
              className='rounded-lg shadow-sm shadow-gray-500 w-full h-full object-cover opacity-60'
              priority
            />
            <div className='absolute bottom-3 left-3 flex flex-col w-1/2 text-white bg-gray-800/90 p-4 rounded-lg'>
              <h3 className='font-bold text-2xl'>{scienceArticles[0].title}</h3>
              <p>{scienceArticles[0].abstract}</p>
            </div>
          </div>
        </Link>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {scienceArticles?.map((scienceArticle, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            {scienceArticle.multimedia && scienceArticle.multimedia.length > 0 && (
              <Image
                src={scienceArticle.multimedia[0].url}
                alt={scienceArticle.multimedia[0].caption}
                width={scienceArticle.multimedia[0].width}
                height={scienceArticle.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full transition-all duration-500 hover:scale-105'
                priority
              />
            )}
            <p className='text-xs italic'>{scienceArticle.byline.replace('By', '').trim()}&nbsp;<span>{new Date(scienceArticle.published_date).toLocaleDateString()}</span></p>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>{scienceArticle.title}</h2>
              <p className='text-gray-600'>{scienceArticle.abstract}</p>
              <Link href={scienceArticle.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScienceNews