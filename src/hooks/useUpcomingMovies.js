
import {useDispatch} from "react-redux"
import {API_OPTIONS} from "../utils/constants"
import { useEffect } from "react";
import {addUpcomingMovies } from "../utils/moviesSlice";



const useUpcomingMovies=()=>{
    //Fetch data from API and update store
   const dispatch =useDispatch();

   const getUpcomingMovies= async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
 
 
     const json=await data.json();
     dispatch(addUpcomingMovies(json.results));
     
   };
   useEffect(()=>{
     getUpcomingMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
};
export default useUpcomingMovies;