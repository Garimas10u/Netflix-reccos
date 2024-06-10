import React from 'react'


const VideoTitle = ( {title, overview}) => {
  return (
    <div className='w-screen aspect-video  pt-[20%] px-6 md:pt-20 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='sm:text-2xl pt-20 md:text-5xl font-bold'>{title}</h1>
        <p className=' sm:hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex items-center text-center'>

        <button className="bg-white text-black text- p-4 px-16 text-center hover:opacity-60 ">
        Play
        </button> 
        <button className= "sm:hidden md:inline-block ml-2 bg-white text-black sm:py-2 md:p-4 md:px-16 text-center">More Info
        </button> 
        </div>
    </div>
  )
}

export default VideoTitle 