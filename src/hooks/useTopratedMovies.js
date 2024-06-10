
import {useDispatch} from "react-redux"
import {API_OPTIONS} from "../utils/constants"
import { useEffect } from "react";
import {addTopratedMovies } from "../utils/moviesSlice";



const useTopratedMovies=()=>{
    //Fetch data from API and update store
   const dispatch =useDispatch();

   const getTopratedMovies= async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
 
 
     const json=await data.json();
     dispatch(addTopratedMovies(json.results));
     
   };
   useEffect(()=>{
      getTopratedMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
};
export default useTopratedMovies;