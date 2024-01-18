'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Noticia_Text } from "next/font/google";

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const FoodNews = () => {
  const [foodArticles, setFoodArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${API_KEY}`, { 'no-cache': true })
      const data = await response.json()
      setFoodArticles(data.results)
      console.log(data)
    }
    fetchData()
  }, [])

  // Find the first article with a multimedia array that isn't empty
  const firstArticleWithMultimedia = foodArticles.find((article) => article.multimedia && article.multimedia.length > 0)

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className={`${noticia.className} 2xl:text-5xl px-4 pb-2`}>Food News</h1>
      <h2 className={`${noticia.className} 2xl:text-3xl px-4`}>Serving up food tips and insights</h2>
      {/* Display the first article with a multimedia array that isn't empty */}
      {firstArticleWithMultimedia && (
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
            <div className='absolute bottom-3 left-3 flex flex-col w-1/2 text-white bg-gray-800/90 p-4 rounded-lg'>
              <h3 className='font-bold text-2xl'>{firstArticleWithMultimedia.title}</h3>
              <p>{firstArticleWithMultimedia.abstract}</p>
            </div>
          </div>
        </Link>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Filter the articles array to only include articles with a multimedia array that isn't empty */}
        {foodArticles.filter((foodArticle) => foodArticle.multimedia && foodArticle.multimedia.length > 0).map((foodArticle, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-4'>
            {foodArticle.multimedia && foodArticle.multimedia.length > 0 && (
              <Image
                src={foodArticle.multimedia[0].url}
                alt={foodArticle.multimedia[0].caption}
                width={foodArticle.multimedia[0].width}
                height={foodArticle.multimedia[0].height}
                className='rounded-lg shadow-sm shadow-gray-500 w-full transition-all duration-500 hover:scale-105'
                priority
              />
            )}
            <p className='text-xs italic'>{foodArticle.byline.replace('By', '').trim()}&nbsp;<span>{new Date(foodArticle.published_date).toLocaleDateString()}</span></p>
            <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>{foodArticle.title}</h2>
              <p className='text-gray-600'>{foodArticle.abstract}</p>
              <Link href={foodArticle.url} target="_blank" rel='noopener noreferrer' className='text-blue-500 hover:opacity-70 hover:underline text-sm'>Read more on NYT</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodNews