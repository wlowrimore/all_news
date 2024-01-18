import ScienceNews from "../conponents/scienceNews/ScienceNews"
import TechNews from "../conponents/techNews/TechNews"

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 mx-[16rem]'>
      <ScienceNews />
    </div>
  )
}

export default page