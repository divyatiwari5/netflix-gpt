"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "@/store/movieSlice";
import MainContainer from "./MainContainer";
import MovieSuggestions from "./MovieSuggestions";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const Browse = ({ movies }: { movies: Movie[] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNowPlayingMovies(movies));
  }, [movies, dispatch]);

  return (
    <div className="bg-black text-white">
      <MainContainer />
      <MovieSuggestions />
    </div>
  );
};

export default Browse;
