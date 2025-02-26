import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'



const MainContainer = () => {
    const movies =useSelector(store =>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie=movies[0];
  

    const{original_title, overview}=mainMovie
  return (
    <div className='pt-[40%] md:pt-0 bg-black '>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer