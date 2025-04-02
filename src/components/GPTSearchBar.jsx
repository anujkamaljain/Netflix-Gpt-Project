import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[4%] flex justify-center z-1">
      <form className="w-1/2 bg-black grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 bg-white text-gray-600 rounded-lg col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
