
import {createSlice} from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies: null,
        upcomingMovies: null,
        topratedMovies: null,
        trailerVideo:null,
        movies: [], 
        currentMovie: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies=action.payload;
        },
        addTopratedMovies: (state, action)=>{
            state.topratedMovies=action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo=action.payload;
        },
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setCurrentMovie(state, action) {
            state.currentMovie = action.payload;
        },
    },
});

export const {addNowPlayingMovies,addPopularMovies, addUpcomingMovies, addTopratedMovies, addTrailerVideo, setMovies, setCurrentMovie}= moviesSlice.actions;

export default moviesSlice.reducer;