'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

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

  // Find the first article with a multimedia array that isn't empty
  const firstArticleWithMultimedia = Array.isArray(articles) && articles.find((article) => article.multimedia && article.multimedia.length > 0)

  return (
    <div className='max-w-7xl mx-auto'>
      {/* Display the first article with a multimedia array that isn't empty */}
      {firstArticleWithMultimedia && (
        <Fade direction='up' cascade triggerOnce>
          <Link href={firstArticleWithMultimedia.url} target='_blank' rel='noopenernoreferrer' className='transition-all duration-300 hover:opacity-90'>
            <div className='relative bg-gray-900 rounded-lg m-4 h-[33rem]'>
              <Image
                src={firstArticleWithMultimedia.multimedia[0].url}
                alt={firstArticleWithMultimedia.multimedia[0].caption}
                width={firstArticleWithMultimedia.multimedia[0].width}
                height={firstArticleWithMultimedia.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full h-full object-cover opacity-90'
                priority
              />
              <div className='absolute bottom-3 left-3 flex flex-col w-1/2 text-white bg-gray-800/90 p-4 rounded-lg'>
                <h3 className='font-bold text-2xl'>{firstArticleWithMultimedia.title}</h3>
                <p>{firstArticleWithMultimedia.abstract}</p>
              </div>
            </div>
          </Link>
        </Fade>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Filter the articles array to only include articles with a multimedia array that isn't empty */}
        {articles && articles.filter((article) => article.multimedia && article.multimedia.length > 0).map((article, index) => (
          <Fade key={index} direction='up' cascade triggerOnce>
            <div key={index} className='bg-white rounded-lg shadow-md p-4'>
              {article.multimedia && article.multimedia[1] && (
                <Image
                  src={article.multimedia[1].url}
                  alt={article.multimedia[1].caption}
                  width={article.multimedia[1].width}
                  height={article.multimedia[1].height}
                  className='rounded-lg transition-all hover:scale-105 duration-500'
                />
              )}
              <p className='text-xs italic'><span>{article.byline.replace('By', '').trim()}&nbsp;{new Date(article.published_date).toLocaleDateString()}</span></p>

              <div className='mt-2'>
                <h2 className='text-lg font-bold'>{article.title}</h2>
                <p className='text-gray-600'>{article.abstract}</p>
                <Link href={article.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}

export default HomePageStories