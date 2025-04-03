import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useAI from "../utils/openAi";
import { API_OPTIONS, GPTQuery, GPTQuery2 } from "../utils/constants";
import {
  addGeminiMovieResult,
  toggleApiKeySubmitButtonClick,
  toggleSearchButtonClick,
} from "../utils/GPTSlice";
import { useDispatch } from "react-redux";
import { addAPI_KEY } from "../utils/userSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const API_KEY = useRef(null);

  const ai = useAI();

  const dispatch = useDispatch();

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

  const handleAPIKEYsubmit = () => {
    dispatch(addAPI_KEY(API_KEY.current.value));
    dispatch(toggleApiKeySubmitButtonClick());
  } 

  const handleGPTSearchClick = async () => {
    dispatch(toggleSearchButtonClick());

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

      dispatch(
        addGeminiMovieResult({
          movieNames: geminiMovies,
          movieResults: await tmdbResults,
        })
      );
    }

    await main();
  };

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <div className="xl:pt-[9%] lg:pt-[9%] md:pt-[11%] sm:pt-[13%] pt-[19%] md:flex justify-center z-1 grid-rows-2">
      <form
          className="md:w-1/2 bg-black/80 grid grid-cols-12 w-screen"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={API_KEY}
            type="text"
            className="p-4 m-4 bg-white text-gray-600 rounded-lg col-span-9 "
            placeholder={lang[langKey].apiKeyPlaceholder}
            required
          />
          <button
            className="py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3 hover:opacity-80 cursor-pointer"
            onClick={handleAPIKEYsubmit}
          >
            {lang[langKey].Enter}
          </button>
        </form>
        <form
          className="md:w-1/2 w-screen bg-black/80 grid grid-cols-12 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 bg-white text-gray-600 rounded-lg col-span-9 "
            placeholder={lang[langKey].gptSearchPlaceholder}
            required
          />
          <button
            className="py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3 hover:opacity-80 cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
