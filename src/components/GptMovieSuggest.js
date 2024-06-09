import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';


const GptMovieSuggest = () => {

  const {movieResults, movieNames} =useSelector(store=> store.gpt);
  
  if(!movieNames) return null;


  return (
    <div className='p-4 m-10 bg-black text-3xl text-white opacity-95 rounded-2xl  '>
      <div  className="opacity-100">
        { movieNames.map((movieName, index) => <Movielist 
        key={movieName}
        title={movieName}
        movies={movieResults[index]}
        />)}
      </div>
    </div>
  )
}

export default GptMovieSuggest