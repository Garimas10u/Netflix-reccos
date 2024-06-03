import React from 'react'


const VideoTitle = ( {title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-20 px-12 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='pt-20 text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex items-center text-center'>

        <button className="bg-white text-black text- p-4 px-16 text-center hover:opacity-60 ">
        Play
        </button> 
        <button className= "ml-2 bg-white text-black  p-4 px-16 text-center">More Info
        </button> 
        </div>
    </div>
  )
}

export default VideoTitle 