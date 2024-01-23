import TravelNews from "../components/travelNews/TravelNews"
import { wait } from "../utils/wait"

export const metadata = {
  title: 'News Link Now | Travel News',
  description: 'Get up-to-date news from the New York Times. Search for anything from a specific person to a specific topic.  Be sure to use the filter field to narrow down your search for a more focused result.',
  keywords: 'New York Times, News, Search, Filter, News Link Now, Insider News, Food News, Health News, Tech News, Sports News, Opinion News, World News, Food, Health, Tech, Sports, Opinion, World, Insider, Search, Filter, News Link Now, 2023',
  author: 'William Lowrimore, News Link Now, 2023, https://news-link-now.vercel.app, https://github.com/wlowrimore, fakenamedev, @wlowrimore, wlowrimore',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  themeColor: '#fff',
}

const page = async () => {
  await wait(2500)
  return (
    <div className='flex min-h-screen flex-col items-center justify-between pt-16 md:p-6 lg:p-8 xl:p-10 2xl:p-24 xl:mx-12 2xl:mx-[16rem]'>
      <TravelNews />
    </div>
  )
}

export default page