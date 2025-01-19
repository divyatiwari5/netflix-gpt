"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MovieSuggestions = () => {
  const movies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );

  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold mb-4">Now Playing</h1>
      <div className="flex overflow-x-scroll">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-48 mr-4">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg"
              width={0}
              height={0}
            />
            <h2 className="mt-2 text-sm">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestions;
