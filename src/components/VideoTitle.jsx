import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video xl:pt-[13%] md:pt-[6%] sm:pt-[10%] pt-[21%] md:pl-24 pl-8 absolute text-white">
      <h1 className="lg:text-6xl font-bold text-4xl xl:mt-5 lg:mt-5 md:mt-30 md:mb-0 mt-50 mb-8">
        {title}
      </h1>
      <h1 className="py-6 lg:text-lg md:w-1/3  md:text-sm hidden md:inline-block">{overview}</h1>
      <div>
        <button className="bg-white text-black md:w-32 md:h-12 text-xl rounded-lg hover:opacity-80 cursor-pointer w-24 h-8 text-center">
          ▷ Play
        </button>
        <button className="bg-gray-700/60 text-white/100 md:w-44 md:h-12 text-xl rounded-lg mx-2 hover:opacity-80 cursor-pointer ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
