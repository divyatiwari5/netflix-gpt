import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import Image from "next/image";

const GPTSearch = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <Image
          src="/bg.jpg"
          alt="bg-image"
          width={0}
          height={0}
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10">
        <GPTSearchBar />
        <GPTSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
