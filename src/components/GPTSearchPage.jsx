import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BGIMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          src={BGIMG_URL}
          alt="Netflix Originals"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
