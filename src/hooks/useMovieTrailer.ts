import { useState, useEffect } from 'react';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface TMDBVideo {
  type: string;
  key: string;
  site: string;
}

export const useMovieTrailer = (movieId: number | undefined) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovieTrailer = async () => {
      if (!movieId) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch trailer');
        }
        
        const data = await response.json();
        const trailers = data.results?.filter(
          (video: TMDBVideo) => video.type === "Trailer"
        );
        
        const trailerData = trailers.length ? trailers[0] : data.results[0];
        setTrailerKey(trailerData?.key || null);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error fetching trailer');
        console.error("Error fetching trailer:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieTrailer();
  }, [movieId]);

  return { trailerKey, isLoading, error };
}; 