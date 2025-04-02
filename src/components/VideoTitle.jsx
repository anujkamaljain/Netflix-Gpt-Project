import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-24 absolute text-white bg-gradient-to-b from-black/80 to-transparent ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h1 className="py-6 text-lg w-1/3">{overview}</h1>
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
