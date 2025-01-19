import Image from "next/image";
import React from "react";

interface Movie {
  title: string;
  poster_path: string;
}
const MovieCard = ({ title, poster_path }: Movie) => {
  return (
    <div className="flex-none w-48 mr-4">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full rounded-lg"
        width={0}
        height={0}
      />
      <h2 className="mt-2 text-sm">{title}</h2>
    </div>
  );
};

export default MovieCard;
