import React from 'react'

const Loading = () => {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center p-24 mx-[16rem]'>
      <div className='loader'></div>
      <div className='absolute animate-pulse transition duration-500'>
        <h1 className='text-center text-6xl font-bold tracking-wider text-red-400'>NLN</h1>
        <h2 className='text-center text-lg font-bold tracking-wider text-neutral-900'>News Link Now</h2>
      </div>
    </div>
  )
}

export default Loading