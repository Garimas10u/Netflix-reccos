
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants'
import { setCurrentMovie } from '../utils/moviesSlice';

const MovieCard = ({posterPath, movie}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {

    dispatch(setCurrentMovie(movie));
    navigate(`/movies/${movie.id}`);
  };
  
  if(!posterPath) return null;

  return (
    <div className='w-60 pr-4 transform transition-transform hover:scale-110' onClick={handleClick}>
        <img src={IMG_CDN_URL + posterPath} className=" object-contain rounded-lg" alt="MOVIE POSTER" />
    </div>
  )
}

export default MovieCard