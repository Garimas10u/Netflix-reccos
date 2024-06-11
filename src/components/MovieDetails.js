import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';
import VideoBackground from './VideoBackground';

const MovieDetails = (movieId) => {
  const movie = useSelector(state => state.movies.currentMovie);

  if (!movie || movie.id !== Number(movieId)) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold text-red-800 pb-6'>{movie.title}</h1>
      <img src={IMG_CDN_URL + movie.poster_path} className="object-contain rounded-lg mb-4" alt="MOVIE POSTER" />
      <p className='text-lg'>{movie.overview}</p>
      <div className='mt-6'>
        <h2 className='text-2xl font-bold'>Trailer</h2>
       <VideoBackground/>
      </div>
    </div>
  );
};

export default MovieDetails;
