'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
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

  const firstArticleWithMultimedia = Array.isArray(usArticles) && usArticles.find((article) => article.multimedia && article.multimedia.length > 0)

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className={`${noticia.className} text-3xl px-4 md:text-4xl 2xl:text-5xl`}>U.S. News</h1>
      <h2 className={`${noticia.className} px-4 md:text-lg 2xl:text-3xl`}>See what&apos;s happening across the U.S.</h2>
      {firstArticleWithMultimedia && (
        <Fade direction='up' cascade triggerOnce>
          <Link href={firstArticleWithMultimedia.url} target='_blank' rel='noopenernoreferrer' className='transition-all duration-300 hover:opacity-90'>
            <div className='relative bg-gray-900 rounded-lg m-4 h-[33rem]'>
              <Image
                src={firstArticleWithMultimedia.multimedia[0].url}
                alt={firstArticleWithMultimedia.multimedia[0].caption}
                width={firstArticleWithMultimedia.multimedia[0].width}
                height={firstArticleWithMultimedia.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full h-full object-cover opacity-60'
                priority
              />
              <div className='absolute bottom-1.5 md:bottom-3 left-1.5 md:left-3.5 flex flex-col w-[96%] lg:w-2/3 xl:w-1/2 text-white bg-gray-800/90 p-4 rounded-lg'>
                <h3 className='font-bold md:text-2xl'>{firstArticleWithMultimedia.title}</h3>
                <p className='text-sm font-thin md:text-md md:font-normal tracking-wider'>{firstArticleWithMultimedia.abstract}</p>
              </div>
            </div>
          </Link>
        </Fade>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {usArticles && usArticles.filter((usArticle) => usArticle.multimedia && usArticle.multimedia.length > 0).map((usArticle, index) => (
          <Fade key={index} direction='up' cascade triggerOnce>
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
          </Fade>
        ))}
      </div>
    </div>
  )
}

export default USNews