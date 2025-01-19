import React from "react";
import Browse from ".";
import Header from "@/components/Header";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
console.log({TMDB_API_KEY})
const BASE_URL = 'https://api.themoviedb.org/3';

async function getNowPlayingMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 } } // Revalidate every 60 seconds
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  
  return response.json();
}

const Page = async () => {
  const movies = await getNowPlayingMovies();

  return (
    <div>
      <Header />
      <Browse movies={movies.results} />
    </div>
  );
};

export default Page;
