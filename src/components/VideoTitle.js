import React from 'react'


const VideoTitle = ( {title, overview}) => {
  return (
    <div className='pt-40 px-12'>
        <h1 className='pt-20 text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex items-center text-center'>

        <button className="bg-gray-500 text-black bg-opacity-50 p-4 px-16 text-center ">
        Play
        </button> 
        <button className= "ml-2 bg-gray-500 text-black bg-opacity-50 p-4 px-16 text-center">More Info
        </button> 
        </div>
    </div>
  )
}

export default VideoTitle 