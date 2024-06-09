
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;

  return (
    <div className='w-60 pr-4 transform transition-transform hover:scale-110'>
        <img src={IMG_CDN_URL + posterPath} className="  object-cover rounded-lg" alt="MOVIE POSTER" />
    </div>
  )
}

export default MovieCard