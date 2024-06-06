
import {createSlice} from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies: null,
        upcomingMovies: null,
        topratedMovies: null,
        trailerVideo:null,
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
    },
});

export const {addNowPlayingMovies,addPopularMovies, addUpcomingMovies, addTopratedMovies, addTrailerVideo}= moviesSlice.actions;

export default moviesSlice.reducer;