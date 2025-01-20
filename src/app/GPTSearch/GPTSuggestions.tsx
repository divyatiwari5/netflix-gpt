'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import MovieCard from "../browse/MovieSuggestions/MovieCard";

const GPTSuggestions = () => {
  const { movieResults, searchQuery } = useSelector((state: RootState) => state.gpt);

  if (!movieResults.length) return null;

  return (
    <div className="p-4 mt-6 bg-black bg-opacity-90">
      <h1 className="text-3xl font-bold mb-4">Search Results for: {searchQuery}</h1>
      <div className="flex overflow-x-scroll">
        {movieResults.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestions;
