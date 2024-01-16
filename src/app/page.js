
import LatestNews from './conponents/LatestNews'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='text-3xl font-bold'>The Latest!</h1>
        <p className='text-2xl'>News Just For You</p>
        <LatestNews />
      </div>
    </main>
  )
}
