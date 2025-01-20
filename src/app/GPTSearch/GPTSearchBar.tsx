'use client';

import { useState } from "react";
import openai from "@/utils/openai";
import { useDispatch } from "react-redux";
import { setGPTMovieResults, setSearchQuery } from "@/store/gptSlice";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchMovieFromTMDB = async (movieName: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movieName}&include_adult=false&language=en-US&page=1`
    );
    const json = await response.json();
    return json.results[0];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    setIsLoading(true);
    try {
      // Get movie suggestions from GPT
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Act as a Movie Recommendation System and suggest some movies for the query: ${searchText}. Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Inception, The Matrix, Interstellar, The Dark Knight, Pulp Fiction`,
          },
        ],
        model: 'gpt-3.5-turbo',
      });

      const gptMovies = chatCompletion.choices[0]?.message?.content?.split(", ");
      
      // Search each movie on TMDB
      if (gptMovies) {
        const moviePromises = gptMovies.map((movie) => searchMovieFromTMDB(movie));
        const tmdbResults = await Promise.all(moviePromises);
        const filteredResults = tmdbResults.filter(movie => movie?.poster_path);
        dispatch(setGPTMovieResults(filteredResults));
        dispatch(setSearchQuery(searchText));
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form 
        className="w-full md:w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="What would you like to watch today?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
