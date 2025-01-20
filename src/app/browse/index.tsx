"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "@/store/movieSlice";
import MainContainer from "./Trailer/MainContainer";
import MovieSuggestions from "./MovieSuggestions/MovieSuggestions";
import { RootState } from "@/store/store";
import GPTSearch from "../GPTSearch";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const Browse = ({
  movies,
  popularMovies,
}: {
  movies: Movie[];
  popularMovies: Movie[];
}) => {
  const dispatch = useDispatch();
  const showGPTSearch = useSelector(
    (state: RootState) => state.gpt.showGPTSearch
  );
  useEffect(() => {
    dispatch(addNowPlayingMovies(movies));
    dispatch(addPopularMovies(popularMovies));
  }, [movies, dispatch, popularMovies]);

  return (
    <div className="bg-black text-white">
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <MovieSuggestions />
        </>
      )}
    </div>
  );
};

export default Browse;
