import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';



const Browse = () => {
  const showGptSearch=useSelector(store =>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();
  

  return (
    <div>
      <Header/>
      {
        showGptSearch ?(<GptSearch /> ) :
         (
         <>
         <MainContainer/>
         <SecondaryContainer/>
         <Footer/>
        </>)
      }
     
    </div>
  )
}

export default Browse