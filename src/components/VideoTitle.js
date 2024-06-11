import React from 'react'


const VideoTitle = ( {title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 lg:pt-40 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='  sm:text-4xl pt-20 md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:block py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex items-center text-center mt-16 md:mt-0'>

        <button className="bg-red-800 text-white p-2 px-6 rounded-lg md:p-4 md:px-16 text-center hover:opacity-60 ">
        Play
        </button> 
        <button className= "sm:hidden md:inline-block ml-2 bg-white rounded-lg text-black p-2 px-4 md:p-4 md:px-16 text-center">More Info
        </button> 
        </div>
    </div>
  )
}

export default VideoTitle 