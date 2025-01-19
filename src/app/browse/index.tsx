"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "@/store/movieSlice";
import MainContainer from "./Trailer/MainContainer";
import MovieSuggestions from "./MovieSuggestions/MovieSuggestions";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const Browse = ({ movies, popularMovies }: { movies: Movie[], popularMovies: Movie[] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNowPlayingMovies(movies));
    dispatch(addPopularMovies(popularMovies));
  }, [movies, dispatch, popularMovies]);

  return (
    <div className="bg-black text-white">
      <MainContainer />
      <MovieSuggestions />
    </div>
  );
};

export default Browse;
