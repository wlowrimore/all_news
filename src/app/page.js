import HomePageStories from "./components/HomePageStories";
import { Noticia_Text } from "next/font/google";
import { wait } from "./utils/wait";

const noticia = Noticia_Text({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'News Link Now | Home',
  description: 'Get up-to-date news from the New York Times. Search for anything from a specific person to a specific topic.  Be sure to use the filter field to narrow down your search for a more focused result.',
  keywords: 'New York Times, News, Search, Filter, News Link Now, Insider News, Food News, Health News, Tech News, Sports News, Opinion News, World News, Food, Health, Tech, Sports, Opinion, World, Insider, Search, Filter, News Link Now, 2023',
  author: 'William Lowrimore, News Link Now, 2023, https://news-link-now.vercel.app, https://github.com/wlowrimore, fakenamedev, @wlowrimore, wlowrimore',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  themeColor: '#fff',
}

export default async function Home() {
  await wait(2500)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-16 md:p-6 lg:p-8 xl:p-10 2xl:p-24 xl:mx-12 2xl:mx-[16rem]'>
      <div className='w-full flex'>
        <div className={`${noticia.className} flex flex-col w-full text-start px-4`}>
          <h1 className='text-3xl md:text-4xl 2xl:text-5xl'>News Link Now</h1>
          <p className='md:text-lg 2xl:text-3xl'>The latest news on demand</p>
        </div>
        <div className='w-[40%] 2xl:w-1/2 2xl:px-2 flex justify-center items-center md:px-5 lg:px-14  bg-red-500 mx-4 my-2 rounded-lg'>
          <h2 className='text-xs md:text-lg 2xl:text-2xl font-semibold text-center w-full uppercase animate-pulse text-white'>Happening now!</h2>
        </div>
      </div>
      <HomePageStories />
    </main>

  )
}
