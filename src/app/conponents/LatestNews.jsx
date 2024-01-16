'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const LatestNews = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setArticles(data.results)
    }
    fetchData()
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {articles?.map((article, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            <Link href={article.url} target="_blank">
              <Image
                src={article.multimedia[0].url}
                alt={article.multimedia[0].caption}
                width={article.multimedia[0].width}
                height={article.multimedia[0].height}
                className='rounded-lg'
              />
            </Link>
            <div className='mt-2'>
              <h2 className='text-lg font-bold'>{article.title}</h2>
              <p className='text-gray-600'>{article.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestNews