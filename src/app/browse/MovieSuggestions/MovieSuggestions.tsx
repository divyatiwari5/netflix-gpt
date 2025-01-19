"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import MovieCard from "./MovieCard";

const MovieSuggestions = () => {
  const movies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector(
    (state: RootState) => state.movies.popularMovies
  );

  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold mb-4">Now Playing</h1>
      <div className="flex overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="flex overflow-x-scroll">
        {popularMovies.map((movie) => (
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestions;
