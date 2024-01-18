import MovieNews from "../components/movieNews/MovieNews"

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 mx-[16rem]'>
      <MovieNews />
    </div>
  )
}

export default page