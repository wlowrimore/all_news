'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const HomePageStories = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setArticles(data.results)
    }
    fetchData()
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      {articles[0]?.multimedia && articles[0].multimedia.length > 0 && (
        <Link href={articles[0].url} target='_blank' rel='noopenernoreferrer' className='transition-all duration-300 hover:opacity-90'>
          <div className='relative bg-gray-900 rounded-lg m-4 h-[33rem]'>
            <Image
              src={articles[0].multimedia[0].url}
              alt={articles[0].multimedia[0].caption}
              width={articles[0].multimedia[0].width}
              height={articles[0].multimedia[0].height}
              className='rounded-lg shadow-sm shadow-gray-500 w-full h-full object-cover opacity-60'
              priority
            />
            <div className='absolute bottom-3 left-3 flex flex-col w-1/2 text-white bg-gray-800/90 p-4 rounded-lg'>
              <h3 className='font-bold text-2xl'>{articles[0].title}</h3>
              <p>{articles[0].abstract}</p>
            </div>
          </div>
        </Link>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {articles?.map((article, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            {article.multimedia && article.multimedia[1] && (
              <Image
                src={article.multimedia[1].url}
                alt={article.multimedia[1].caption}
                width={article.multimedia[1].width}
                height={article.multimedia[1].height}
                className='rounded-lg'
              />
            )}
            <p className='text-sm italic'>Published on:&nbsp;<span>{new Date(article.published_date).toLocaleDateString()}</span></p>
            <div className='mt-2'>
              <h2 className='text-lg font-bold'>{article.title}</h2>
              <p className='text-gray-600'>{article.abstract}</p>
              <Link href={article.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePageStories