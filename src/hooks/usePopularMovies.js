
import {useDispatch} from "react-redux"
import {API_OPTIONS} from "../utils/constants"
import { useEffect } from "react";
import {addPopularMovies } from "../utils/moviesSlice";



const usePopularMovies=()=>{
    //Fetch data from API and update store
   const dispatch =useDispatch();

   const getPopularMovies= async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
 
 
     const json=await data.json();
     dispatch(addPopularMovies(json.results));
     
   };
   useEffect(()=>{
     getPopularMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
};
export default usePopularMovies;