import React from 'react'
import {useRef } from 'react'
import { useDispatch } from 'react-redux'
import lang from "../utils/langConst"
import { useSelector } from 'react-redux'
import { API_OPTIONS, GEMINI_API } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
const { GoogleGenerativeAI } = require("@google/generative-ai");




const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchMovie=async(movie)=>{
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json= await data.json();
    console.log();
    return json.results;

  }
 

  const langKey=useSelector(store=> store.config.lang)
   const searchText=useRef(null);


  const handleGptSearchClick =async()=>{
   
    console.log(searchText.current.value);

    const genAI = new GoogleGenerativeAI(GEMINI_API );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = "Act as a movie recommendation "+searchText.current.value + "only give names of 5 movies,separate them by commas and remove \n from the response" 
  
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    const gptMovies= text.split(", ");
    console.log(gptMovies);

    const promiseArray=gptMovies.map((movie)=> searchMovie(movie));
    const movieRes=await Promise.all(promiseArray)
    console.log(movieRes);
    
    dispatch(
      addGptMovieResult({movieNames:gptMovies, movieResults:movieRes})
    );


  }

  
  return (

    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-2/3 grid grid-cols-12' onSubmit={(e) =>e.preventDefault()}
        >
            <input 
            ref={searchText}
            type="text" className='p-2 m-2 col-span-8' placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='col-span-4 m-3 py-2 px-4 bg-red-700 text-white' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>

    </div>
  )
}

export default GptSearchBar