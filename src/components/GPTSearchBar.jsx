import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import ai from "../utils/openAi";
import { API_OPTIONS, GPTQuery, GPTQuery2 } from "../utils/constants";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const Gptqueryfinal = GPTQuery + searchText.current.value + GPTQuery2;

    async function main() {
      const model = await ai.getGenerativeModel({
        model: "gemini-2.0-flash",
      });
      const response = await model.generateContent(Gptqueryfinal);

      if (!response?.response) {
        alert("No response from Gemini. Please try again after some time.");
      }

      const geminiMovies =
        response?.response?.candidates[0]?.content?.parts[0]?.text.split(",");

      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = Promise.all(promiseArray);

      console.log(tmdbResults);
    }

    await main();
  };

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[4%] flex justify-center z-1">
      <form
        className="w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white text-gray-600 rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3 hover:opacity-80 cursor-pointer"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
