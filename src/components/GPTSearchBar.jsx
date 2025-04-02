import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";


const GPTSearchBar = () => {

const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[4%] flex justify-center z-1">
      <form className="w-1/2 bg-black grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 bg-white text-gray-600 rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
