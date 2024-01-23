import USNews from '../components/usNews/USNews'
import { wait } from '../utils/wait'

const page = async () => {
  await wait(2500)
  return (
    <div className='flex min-h-screen flex-col items-center justify-between pt-16 md:p-6 lg:p-8 xl:p-10 2xl:p-24 xl:mx-12 2xl:mx-[16rem]'>
      <USNews />
    </div>
  )
}

export default page