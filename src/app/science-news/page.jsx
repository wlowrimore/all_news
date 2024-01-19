import ScienceNews from "../components/scienceNews/ScienceNews"
import { wait } from "../utils/wait"

const page = async () => {
  await wait(2500)
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 mx-[16rem]'>
      <ScienceNews />
    </div>
  )
}

export default page