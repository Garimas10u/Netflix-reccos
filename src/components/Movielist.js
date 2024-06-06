import React from 'react'
import MovieCard from './MovieCard';

const Movielist = ({ title, movies }) => {
  
   
  return (
    <div className='p-6 max-w-full '>
       <h1 className='text-4xl font-bold text-red-800 pb-6'>{title}</h1>
        <div className='flex no-scrollbar overflow-x-scroll '>
           
             <div className='flex '>
            {movies?.map(movie => 
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          )} 

             </div>
        </div>
      
        
    </div>
  )
}

export default Movielist