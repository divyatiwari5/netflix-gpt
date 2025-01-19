"use client";

import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useMovieTrailer } from "@/hooks/useMovieTrailer";

const VideoBackground = () => {
  const movies = useSelector((state: RootState) => state.movies.nowPlayingMovies);
  const mainMovie = movies[0];
  const { trailerKey, isLoading, error } = useMovieTrailer(mainMovie?.id);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMuteToggle = () => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: isMuted ? 'unMute' : 'mute'
      }),
      '*'
    );
    setIsMuted(!isMuted);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!trailerKey) return null;

  return (
    <div className="w-screen relative">
      <iframe
        ref={iframeRef}
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&enablejsapi=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: "none",
          pointerEvents: "none",
        }}
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black"></div>
      
      <button 
        onClick={handleMuteToggle}
        className="absolute bottom-16 right-16 bg-gray-500 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoBackground;
