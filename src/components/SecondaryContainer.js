
import { useSelector } from 'react-redux'
import Movielist from './Movielist'



const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
 
  return (
    movies &&(
      <div className='bg-black'>
      <div className='-mt-52 relative'><Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/></div>
      <Movielist title={"Trending"} movies={movies.topratedMovies}/>
      <Movielist title={"Popular"} movies={movies.popularMovies}/>
      <Movielist title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
    )
    
  ) 
}

export default SecondaryContainer