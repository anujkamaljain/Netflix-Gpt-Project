import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video xl:pt-[16%] pl-24 absolute text-white">
      <h1 className="lg:text-6xl font-bold md:text-4xl lg:mt-0 mt-75">
        {title}
      </h1>
      <h1 className="py-6 lg:text-lg md:w-1/3  md:text-sm">{overview}</h1>
      <div>
        <button className="bg-white text-black w-32 h-12 text-xl rounded-lg hover:opacity-80 cursor-pointer">
          ▷ Play
        </button>
        <button className="bg-gray-700/60 text-white/100 w-44 h-12 text-xl rounded-lg mx-2 hover:opacity-80 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
