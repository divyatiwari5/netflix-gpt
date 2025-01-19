"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const VideoTitle = () => {
  const movies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  const mainMovie = movies[0]; // Get first movie

  if (!mainMovie) return null;

  return (
    <div className="pt-[20%] px-12 absolute z-[1]">
      <h1 className="text-6xl font-bold text-white">{mainMovie.title}</h1>
      <p className="text-lg text-white w-1/4 py-6">{mainMovie.overview}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
